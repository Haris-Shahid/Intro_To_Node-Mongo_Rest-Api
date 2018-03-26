var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('My first api')
})

app.listen(3000, function() {
    console.log('first api start running on port 3000!')
})