//main.js

const express = require('express');
const app = express();
const ledRouter = require('./led/router');

app.set('view engine', 'pug'); 
app.use(ledRouter);
app.use(express.static('public'));

//start a server on port 80 and log its start to our console
const server = app.listen(3000, function () {

  var port = server.address().port;
  console.log("Hey… I’m a node.js server running in a container and listening on port: ", port);
});
