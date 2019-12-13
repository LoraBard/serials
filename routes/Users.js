const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/google',(req,res,next)=>{
  const profile = req.body.profile;
  User.findOne({ google: profile.id }, function(err, existingUser) {
    if (existingUser) {
      console.log('user exists');
      return;
    }
    const user = new User({
        email: profile.email,
        password:''
    });
    console.log('USER',user);
    user.save();
  });
});

router.post('/signup', function(req, res, next) {
  console.log('UUUUSER',req.body);
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save();
});

router.post('/login', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (!user) return res.send(401, 'User does not exist');
      if (user.password!==req.body.password || user.password === '') return res.send(401, 'Invalid email and/or password');
      res.send({ available: user });
  });
});

router.get('/users', function(req, res, next) {
  if (!req.query.email) {
    return res.send(400, { message: 'Email parameter is required.' });
  }

  User.findOne({ email: req.query.email }, function(err, user) {
    if (err) return next(err);
    res.send({ available: !user });
  });
});

/* GET users listing. */
router.get('*', (req, res) => {
  console.log('NOTnoooooooo');
  res.sendFile(path.join(__dirname, '../dist/browser/index.html'));
});

module.exports = router;
