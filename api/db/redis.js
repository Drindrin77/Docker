const redis = require('redis');
var client = redis.createClient({ host: 'redis', port: 6379 });

client.on('connect', function() {
    console.log('Connected to Redis Database!');
});

module.exports = client