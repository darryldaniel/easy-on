//main.js

const express = require('express');
const app = express();
const led = require('./gpio/led');

led.init(22);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${led.status()}`
  });
});

app.post('/led', (req, res) => {
  led.toggle();
  res.redirect('/');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log("Hey… I’m a node.js server running in a container and listening on port: ", port);
});
