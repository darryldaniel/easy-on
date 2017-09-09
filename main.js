//main.js

const express = require('express');
const app = express();
const GPIO = require('pi-pins');
let led,
  ledOn = false;

const initLed = (pinNumber) => {
  led = GPIO.connect(pinNumber);
  led.mode('out');
}

const toggleLed = () => {
  ledOn = !ledOn;
  led.write(ledOn);
}

const ledStatus = () => {
  return ledOn ? 'ON' : 'OFF';
}

initLed(22);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${ledStatus()}`
  });
});

app.post('/led', (req, res) => {
  toggleLed();
  res.redirect('/');
});

//start a server on port 80 and log its start to our console
const server = app.listen(80, function () {

  var port = server.address().port;
  console.log("Hey… I’m a node.js server running in a container and listening on port: ", port);
});
