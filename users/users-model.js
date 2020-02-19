const db = require('../db/db-config.js');

function find() {
  return db('users').select('id', 'username');
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findBy(filter) {
  return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}

module.exports = {
  find,
  findBy,
  add
}