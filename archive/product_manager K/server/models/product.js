var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    title: {type:String, required:true, minlength: 4},
    price: { type: Number, required: true},
    imageUrl: {type:String}
}, {timestamps: true});

mongoose.model('Product', ProductSchema);