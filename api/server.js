const express = require('express');
const apiRouter = require('./api-router.js');
const session = require('express-session');
const server = express();

const sessionConfig = {
  name: "dRudman",
  secret: "Treehouse hangout, no boys allowed.",
  cookie: {
    maxAge: 600000, //10 minute session.
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true //should be false in production.
};

server.use(express.json());
server.use(session(sessionConfig));
server.use('/api', apiRouter);

module.exports = server;