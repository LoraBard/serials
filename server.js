const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const shows = require('./routes/Shows');
const users = require('./routes/Users');

const app = express();
const port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
require('dotenv/config');

app.use('/api', shows);
app.use('/auth', users);
app.use(express.static(path.join(__dirname, './public/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/browser/index.html'));
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status).send(res.body);
// });

app.listen(port, () => {
  console.log('app running on', port);
});

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
})

module.exports = app;
