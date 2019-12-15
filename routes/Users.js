const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/signup', function(req, res, next) {
  console.log('UUUUSER',req.body);
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save();
  res.send({ available: user });
});

router.post('/login', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (!user) return res.send(401, 'User does not exist');
      if (user.password!==req.body.password || user.password === '') return res.send(401, 'Invalid email and/or password');
      res.send({ available: user });
  });
});


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/browser/index.html'));
});

module.exports = router;
