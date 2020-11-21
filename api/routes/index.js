var express = require('express');
var router = express.Router();
const mongo = require('../db/mongo')
const redis = require('../db/redis')


/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    mongo.insertRate(req.body)
    redis.insertRate(req.body)
    res.send("Done")
  } catch (error) {
    res.send("Error: " + error)
  }

});

module.exports = router;
