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
    // it is an asynchronous
    Product.find({}, function (err, products) {
        if (err) {
            res.status(500).send({ error: 'Could not fetch Products' });
        } else {
            res.send(products);
        }
    })
});

app.post('/wishlist', function (req, res) {
    var wishList = new WishList();
    wishList.title = req.body.title;
    wishList.save(function (err, newWishlist) {
        if (err) {
            res.status(500).send({ error: "Could not create wishList" });
        } else {
            res.send(newWishlist);
        }
    })
});

app.get('/wishlist', function (req, res) {
    WishList.find({}).populate({path: 'products', model: 'Product'}).exec(function(err, wishLists){
        if (err) {
            res.status(500).send({ error: "Could not fetch wishList" });
        } else {
            res.status(200).send(wishLists);
        }
    })
});

app.put('/wishlist/product/add', function(req, res){
    Product.findOne({_id: req.body.productId}, function(err, product){
        if (err) {
            res.status(500).send({ error: "Could not add product in wishlist" });
        } else {
            WishList.update({_id: req.body.wishListId}, {$addToSet: {
                products: product._id
            }}, function(err, wishlist){
                if(err){
                    res.status(500).send({ error: "Could not add item in wishlist" });
                }else{
                    res.send("Successfully added in WishList")
                }
            })
        }
    })
})

app.listen(3000, function () {
    console.log('first api start running on port 3000!')
})