var express = require('express');
var router = express.Router();
const mongo = require('../db/mongo')
const redis = require('../db/redis')


/* GET home page. */
router.post('/', function(req, res, next) {
  try {
    mongo.insertRate(req.body)
    redis.insertRate(req.body)
    res.status(200).send("Données enregistrés")
  } catch (error) {
    res.status(500).send("Error: " + error)
  }

});

module.exports = router;
