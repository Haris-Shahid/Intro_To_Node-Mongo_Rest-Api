var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('My first api')
})

app.get('/api', function(req, res) {
    res.send('yahoo! api is working')
})

app.listen(3000, function() {
    console.log('first api start running on port 3000!')
})