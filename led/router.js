const express = require('express'),
  router = express.Router();

const led = require('./gpio').init(22);


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Easy-On',
    ledStatus: `The LED is ${led.status()}`
  });
});

router.post('/led', (req, res) => {
  led.toggle();
  res.redirect('/');
});


module.exports = router;