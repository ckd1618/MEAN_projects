var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    create: function(req,res){
        console.log('hit create');
        var newProduct = new Product(req.body);
        newProduct.save(function(err){
            if(err){
                console.log('got errors')
                res.json(err);
            }else{
                console.log('success!')
                res.json(newProduct);
            }
        })
    },
    index: function(req,res){
        console.log('hit index');
        Product.find({}, function(err, products){
            res.json(products);
        })
    },

    // show: function(req,res){
    //     console.log('hit show');
    //     N00b.findOne({_id: req.params.id}, function(err, noob){
    //         res.json(noob);
    //     })
    // }
}