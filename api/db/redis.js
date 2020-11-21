const redis = require('redis');

var _db;

module.exports = {
  connectToServer: function( callback ) {
    
    _db = redis.createClient({ host: 'redis', port: 6379 });
    _db.on('connect', function() {
        console.log('Connected to Redis Database!');
    })
    return callback();
  },

  insertRate: function(data){
    let id = Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 3) + "-" + Math.random().toString(36).substr(2, 4);
    _db.set(id, JSON.stringify(data), (err, reply) => {
        if (err) throw err
    });
  }
};
