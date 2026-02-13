const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    email:{
        type : String,
        required:true
    },
    prodID:{
        type : String,
        required: true
    }
},
{
    timestamps:true,
});


module.exports = mongoose.model("Cart",cartSchema);