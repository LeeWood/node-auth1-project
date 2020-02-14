const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

function restrictedAuth(req, res, next) {
  const { username, password } = req.headers;

  if(username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          next();
        }else {
          res.status(401).json({
            message: "You shall not PASS!"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an issue logging you in",
          error: err
        });
      })
  }else {
    res.status(400).json({
      message: 'Please enter username and password.'
    });
  }
};

module.exports = restrictedAuth;