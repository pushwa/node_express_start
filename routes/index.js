//
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('index', { heading: 'Welcome' });
});

module.exports = router;
