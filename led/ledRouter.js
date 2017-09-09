const express = require('express'),
  router = express.Router();

const GPIO = require('pi-pins'),
  led = GPIO.connect(22);

let ledOn = false;

led.mode('out');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${ledOn ? 'ON' : 'OFF'}`
  });
});

router.post('/led', (req, res) => {
  ledOn = !ledOn;
  led.write(ledOn);
  res.redirect('/');
});


module.exports = router;