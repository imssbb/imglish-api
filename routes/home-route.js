const router = require('express').Router();

// Ping Homepage - Wakeup Server on Heroku
router.get('/', (req, res) => {
  console.log('Server is awake!');
  res.send('Server is awake!');
});

module.exports = router;
