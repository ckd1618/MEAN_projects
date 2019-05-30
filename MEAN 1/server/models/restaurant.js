var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    name: {type:String},
    stars: {type:Number},
    review: {type:String},
}, {timestamps: true});
mongoose.model('Review', ReviewSchema);

var RestaurantSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength: 3, unique: true},
    cuisine: { type: String, required: true, minlength: 3},
    review: [ReviewSchema]
}, {timestamps: true});

mongoose.model('Restaurant', RestaurantSchema);
//how to add validations to the array while allowing the submission of just restName and cuisine?
//unique:true adds a deprecation warning