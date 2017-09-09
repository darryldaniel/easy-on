const express = require('express'),
  router = express.Router();

const GPIO = require('pi-pins'),
  led = GPIO.connect(22);

const led = require('./gpio').init(22);


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${led.status()}`
  });
});

router.post('/led', (req, res) => {
  led.toggle();
  res.redirect('/');
});


module.exports = router;