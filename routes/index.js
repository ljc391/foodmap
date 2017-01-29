'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;
var Restaurant = require('../models/restaurant');

router.get('/', function (req, res, next) {
  Restaurant.findAll( )
  .then(artists => res.json(artists))
  .catch(next);
});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
