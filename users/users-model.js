const db = require('../db/db-config.js');

function findUser() {
  return db('users').select('id', 'username');
}

module.exports = {
  findUser
}