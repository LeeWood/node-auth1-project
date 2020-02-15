const express = require('express');
const apiRouter = require('./api-router.js');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const server = express();

const sessionConfig = {
  name: "dRudman",
  secret: "Treehouse hangout, no boys allowed.",
  cookie: {
    maxAge: 1000 * 60 * 20, //20 minute session.
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true, //should be false in production.
  store: new knexSessionStore({
    knex: require('../db/db-config.js'),
    tablename: 'sessions',
    sidfieldname: 'SID',
    createtable: true,
    clearInterval: 1000 * 60 * 20 //20 mins
  }),
};

server.use(express.json());
server.use(session(sessionConfig));
server.use('/api', apiRouter);

module.exports = server;