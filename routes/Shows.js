require('dotenv/config');
const express = require('express');
const router = express.Router();
const request = require('request');
const Show = require('../models/Show');
const User = require('../models/User');
let token = '';
const path = require('path');
const cache = require('../cache/cache');
const Agenda = require('agenda');
const nodemailer = require('nodemailer');
const agenda = new Agenda({
  db: {
    address: process.env.DB_CONNECTION,
    options: { useNewUrlParser: true }
  }
});

agenda.define('send email alert',{priority: 'high', concurrency: 10}, async (job, done) => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let today = days[new Date().getDay()];
    Show.find({ subscribers: { $exists: true, $not: {$size: 0}},
      airsDayOfWeek: today
    },(err, shows) =>{
      if (err) return next(err);

      shows.map(show => {

        if(!show.subscribers) {
          return;
        }

        const emails = show.subscribers.join();

        const upcomingEpisode = show.episodes.filter((episode) => {
          return new Date(episode.firstAired) > new Date();
        })[0];

        if(!upcomingEpisode) {
          return;
        }

      let smtpTransport = nodemailer.createTransport({
        name: "localhost:3000",
        host: "smtp.ethereal.email",
        port: 587,
        service: 'Gmail',
        auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
      });

      let mailOptions = smtpTransport.sendMail({
        from: 'Tatsiana Hetsman', // sender address
        to: emails, // list of receivers
        subject: show.name + ' is starting soon!',
        html: show.name + ' starts in less than 2 hours on ' + show.network + '.\n\n' +
        'Episode ' + upcomingEpisode.episodeNumber + `<br>${upcomingEpisode.overview}`, // plain text body
      });
      });

      })
    });

(async () => {
  const dayReport = agenda.create('send email alert');
  await agenda.start();
  await dayReport.repeatEvery('1 day').save();
})();

getToken();

router.post('/subscribe',(req, res, next) => {
  Show.findById(req.body.showId, (err, show)=> {
    if (err) return next(err);
    show.subscribers.push(req.body.user);
    show.save();
    res.send(true);
  });
  User.findOne({email:req.body.user},(err,user)=> {
    if (err) return next(err);
    user.shows.push(req.body.showId);
    user.save();
  });
});

router.post('/unsubscribe', (req, res, next)=>{
  Show.findById(req.body.showId, (err, show) => {
    if (err) return next(err);
    var index = show.subscribers.indexOf(req.body.user);
    show.subscribers.splice(index, 1);
    show.save();
  });
  User.findOne({email:req.body.user},(err,user)=> {
    if (err) return next(err);
    const index = user.shows.indexOf(req.body.showId);
    user.shows.splice(index,1);
    user.save();
    res.send(true);
  });
});

router.get('/shows/:id',cache.get, (req, res, next) => {
  if(res.body) res.send(res.body);

  Show.findById(req.params.id, (err, show) => {
    if (err) return next(err);
    cache.set(req,show,next);
    res.send(show);
  });
});


router.get('/userShows', async (req,res, next) => {
  console.log('USER_SHOWS');
  console.log('USER_SHOWS_REQUEST', req.query.user);
  let userShows = [];
  let arr = [];
  if (req.query.user) {

    User.aggregate([
        {
          $lookUp:
          {
            from:"shows",
            localField: "shows",
            foreignField: "_id",
            as: "serials"
          }
        }
      ]).exec((err,res)=>{
        console.log('LALALLA',JSON.stringify(res));
      });
    }
      // console.log('USER_SHOWS_VARIABLE', userShows);
      // userShows.map( async showId => {
      //   return Show.findById(showId, (err, show) => {
      //     // if (err) return next(err);
      //     arr.push(show);
      //   });
      // });
      // // const sended = await res.send(arr);
      // // console.log('SENDED',sended);
      // res.send(arr);
});

router.get('/shows', cache.get, async (req, res, next) => {
  console.log('RESPONSE',res);

  if(res.body) {
    console.log('send');
    res.send(res.body);
  }

  if (req.query.genre) {
    await Show.find({ genre: req.query.genre },(err,show)=>{
      if (err) return next(err);
      cache.set(req,show,next);
      res.send(show);
    }).limit(40);
  } else if (req.query.alphabet) {
    await Show.find({ name: new RegExp('^' + '[' + req.query.alphabet + ']', 'i') },(err,show)=>{
      if (err) return next(err);
      cache.set(req,show,next);
      res.send(show);
    }).limit(40);
  }
    else if(req.query.day) {
      await Show.find({ airsDayOfWeek: new RegExp('^' + '[' + req.query.day + ']', 'i') }, async (err,show)=>{
        if (err) return next(err);
        cache.set(req,show,next);
        res.send(show);
      }).limit(40);
  } else {
    Show.find(null,(err,show)=>{
      if (err) return next(err);
      cache.set(req,show,next);
      res.send(show);
    }).limit(40);
  }
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/browser/index.html'));
});

function getToken() {
  request.post('https://api.thetvdb.com/login', {
      body: JSON.stringify({
        apikey: process.env.API_KEY,
        username: process.env.USER_NAME,
        userkey: process.env.USER_KEY
      }),
      headers: {
        'content-type': 'application/json'
      }
    }, (err,resp,next)=>{
      if(err) next(err);
      token= JSON.parse(resp.body).token;
    });
}



/////////////////////    POST ////////////////////////////////

router.post('/shows', async function(req, res, next) {
  let resp;
  var seriesName = req.body.showName.toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');
  try{
    request.get(`https://api.thetvdb.com/search/series?name=${seriesName}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  }, function(error, response, body) {
    if (error) return next(error);
    resp = JSON.parse(body).data;
    if (!resp.length) {
          return res.send(404, { message: req.body.showName + ' was not found.' });
    }
    const AllShows = resp;
    console.log('RESPONSE', resp);
    AllShows.map(async (show) => {
      request.get(`https://api.thetvdb.com/series/${show.id}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }, async (error, response, body) => {
        if (error) return next(error);
          let series = await JSON.parse(body).data;
          show = new Show({
            _id: show.id,
            name: series.seriesName,
            airsDayOfWeek: series.airsDayOfWeek,
            airsTime: series.airsTime,
            firstAired: series.firstAired,
            genre: series.genre,
            network: series.network,
            overview: series.overview,
            rating: series.rating,
            runtime: series.runtime,
            status: series.status,
            poster: 'http://thetvdb.com/banners/'+series.poster,
            banner: 'http://thetvdb.com/banners/'+series.banner,
            episodes: []
          });
          request.get(`https://api.thetvdb.com/series/${show.id}/episodes`,{
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          }, async (req,resp,body)=>{
            resp = await JSON.parse(body).data
            resp.forEach((episode) => {
              show.episodes.push({
                season: episode.airedSeason,
                episodeNumber: episode.airedEpisodeNumber,
                firstAired: episode.firstAired,
                overview: episode.overview,
                seriesId: episode.seriesId,
                filename: 'http://thetvdb.com/banners/'+episode.filename
              });
          });
          await show.save();
        }
        );
      });

    })
  });
  } catch(error){
    console.log(error);
  }
});

module.exports = router;
