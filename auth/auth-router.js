const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 10); 
  console.log(`hashed password: ${hash}`);
  user.password = hash; 


  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Logged In! Welcome back ${user.username}!`});
      } else {
        res.status(401).json({ message: "You shall not PASS!!"});
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "There was an issue logging you in.",
        error: err
      });
    });
});

router.get('/logout', (req, res) => {
  if(req.session) {
    req.session.destroy(error => {
      if(error) {
        res.json({
          message: "There was an issue logging you out, please try again"
        });
      }else {
        res.status(200).json({
          message: "You have been logged out."
        })
      }
    });
  }else {
    res.status(200).json({
      message: "You are already logged out."
    });
  }
});

module.exports = router;