//
const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.render('about', { aboutText: 'This is the about site' });
});

module.exports = router;
