//main.js

const express = require('express');
const app = express();

let ledOn = false,
  led = require('pi-pins').connect(22);

led.mode('out');

app.set('view engine', 'pug');

// reply to request with "Hello World!"
app.get('/message', function (req, res) {
  res.send(`Hello my Candi-Bear,
  
  This is what I was doing with my time while you were at college...
  Now we can talk to the raspberry Pi!!
  
  I love you!! <3`);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Pi Home',
    heading: 'Press the button to toggle LED',
    ledStatus: `The LED is ${ledOn ? 'ON' : 'OFF'}`
  });
});

app.post('/led', (req, res) => {
  let value = ledOn ? 0 : 1;

  ledOn = !ledOn;

  led.value(value);
  res.redirect('/');
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log("Hey… I’m a node.js server running in a container and listening on port: ", port);
});
