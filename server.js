var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

var db = mongoose.connect('mongodb://localhost/swag-shop')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function () {
    console.log('first api start running on port 3000!')
})