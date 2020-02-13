const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');
//const authRequired = require('../auth/authMiddleware.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({
        message: "unable to retrieve users",
        error: err
      });
    });
});

module.exports = router;