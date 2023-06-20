const mongoose= require("mongoose");

const productSchema = new mongoose.Schema({
   title :{
    type:String,
    required: true} ,
   price : String
});

module.exports = mongoose.model("Product", productSchema)