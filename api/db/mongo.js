const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://mongodb:27017/";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
        console.log("Connected to Mongo Database!")
        _db = client.db('dockerProject');
        _db = _db.collection('rateDrindrin')
        
        return callback( err );
    });
  },

  insertRate: function(data){
    _db.insertOne(data, function(err, res) {
      if (err) throw err;
    });
  }
};
