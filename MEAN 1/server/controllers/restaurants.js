var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var Review = mongoose.model('Review');

module.exports = {
    index: function(req,res){
        console.log('hit index');
        Restaurant.find({}, function(err, restaurants){
            res.json(restaurants);
        })
    },
    newP: function(req,res){
        console.log('hit create');
        var newRestaurant = new Restaurant(req.body);
        newRestaurant.save(function(err){
            if(err){
                console.log('got errors')
                res.json(err);
            }else{
                console.log('success!')
                res.json(newRestaurant);
            }
        })
    },
    num: function(req,res){
        console.log('hit show');
        Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
            res.json(restaurant);
        })
    },

    numeditP: (req,res)=>{
        console.log('controller numeditP')
        Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
            restaurant.name = req.body.name;
            restaurant.cuisine = req.body.cuisine;
            restaurant.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    res.json(restaurant);
                }
            })
        })
    },
    numreviewP: (req,res)=>{
        Review.create(req.body, function(err, review){
            if (err){
                res.json(err);                
            }else{
                Restaurant.findOneAndUpdate({_id: req.params.id}, {$push: {review: review}}, function(err,data){
                    if(err){
                        res.json(err);
                    }else{
                        res.json(data);
                    }
                })
            }
        })

        // Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
        //     restaurant.review.custName = req.body.custName;
        //     restaurant.review.stars = req.body.stars;
        //     restaurant.review.desc = req.body.desc;
        //     restaurant.save(function(err){
        //         if(err){
        //             res.json(err);
        //         }else{
        //             res.json(restaurant);
        //         }
        //     })
        // })
    },
    numdelete: (req,res)=>{
        console.log('got to server' +req.params.id);
        Restaurant.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Task Deleted"});
            }
        })
    },
}
