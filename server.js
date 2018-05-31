var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

var db = mongoose.connect('mongodb://localhost/swag-shop')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/product', function (req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    // product.likes = 0;
    product.save(function (err, savedProduct) {
        if (err) {
            res.status(500).send({ error: "Could not save product" });
        } else {
            res.send(savedProduct);
        }
    })
});

app.get('/product', function (req, res) {
    // console.log(1) it is an asynchronous
    Product.find({}, function (err, products) {
        // console.log(2)
        if (err) {
            res.status(500).send({ error: 'Could not fetch Products' });
        } else {
            res.send(products);
        }
    })
    // console.log(3)
});

app.listen(3000, function () {
    console.log('first api start running on port 3000!')
})