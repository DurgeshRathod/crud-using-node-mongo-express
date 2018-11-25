
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//DEFINING SCHEMA FOR PRODUCT
let productSchema = new Schema({
    name:{type:String,required:true,max:100},
    price:{type:Number,required:true},
    qty:{type:Number,required:true},
});

//REGISTERING SCHEMA IN MONGOOSE
module.exports=mongoose.model('Product',productSchema);