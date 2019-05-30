// var mongoose = require('mongoose');

// var MyBagSchema = new mongoose.Schema({
//     items: {type: String},
//     weight: {type: Number}
// }, {timestamps: true});
// mongoose.model('MyBag', MyBagSchema);

// var DisasterSchema = new mongoose.Schema({
//     disaster: {type: String},
//     myBag: [MyBagSchema]
// }, {timestamps: true});
// mongoose.model('Disaster', DisasterSchema);


//--------------------------------
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    // id: {type: Number},
    name: {type: String},
    qty: {type: Number},
    price: {type: Number},
}, {timestamps: true});
mongoose.model('Product', ProductSchema);

//---------------------------------------------
// var mongoose = require('mongoose');

// var ReviewSchema = new mongoose.Schema({
//     name: {type:String},
//     stars: {type:Number},
//     review: {type:String},
// }, {timestamps: true});
// mongoose.model('Review', ReviewSchema);

// var RestaurantSchema = new mongoose.Schema({
//     name: {type:String, required:true, minlength: 3, unique: true},
//     cuisine: { type: String, required: true, minlength: 3},
//     review: [ReviewSchema]
// }, {timestamps: true});

// mongoose.model('Restaurant', RestaurantSchema);
//---------------
// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema,
//     autoIncrement = require('mongoose-auto-increment');
 
// var connection = mongoose.createConnection("mongodb://localhost/myDatabase");
 
// autoIncrement.initialize(connection);
 
// var ProductSchema = new Schema({
//     name: {type: String},
//     qty: {type: Number},
//     price: {type: Number},
// }, {timestamps: true});

 
// ProductSchema.plugin(autoIncrement.plugin, 'Product');
// var Product = connection.model('Product', ProductSchema);



