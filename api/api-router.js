const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/', authRouter);
// router.use('/register', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ status: "up and running!"});
});

module.exports = router;