"use strict";

const verbose = true;
const httpPort = process.env.PORT || 4004;

const UUID = require('node-uuid');

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('lib'));

http.listen(httpPort, function() {
    console.log("listening on port " + httpPort);
});
