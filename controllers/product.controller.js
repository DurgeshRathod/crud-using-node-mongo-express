
const Product = require('../models/product.model')

exports.test = function(req,res){
    res.send("Greeting from the test controller !");
};

exports.product_create = function(req,res,next){
    var product = new Product({
        name:req.body.name,
        price:req.body.price,
        qty:3
    });

    product.save(function(err){
        if(err)
        {
            return next(err);
        }
        res.send('Product created successfully');
    })
};
