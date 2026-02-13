const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountPrice:{
        type:Number,
    },
    offer:{
        type:Number,
    },
    ratings:{
        default:0,
        type:Number,
    },
    url:{
        type:String,
    },
    numbOfCard:{
        type:Number,
        default:0,
    },
    order:{
        type:Number,
        default:0,
    }
}, {timestamps:true}, )

module.exports = mongoose.model("Product",productSchema)