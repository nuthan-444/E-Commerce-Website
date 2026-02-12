const e = require('express');
const Cart = require('../models/cart');



//getting all product in cart 

const getCartProductController = async(req,res) => {
    const email = req.params.email;
    try {
        const gettingAllProduct = await Cart.find({email:email});
        if(gettingAllProduct.length===0) {
           return res.json({message:"No product added to cart."});
        }
        return res.json({message:"Successfully Fetched.",cartProduct:gettingAllProduct});
    }catch(error) {
       return res.json({message:"Server Error"});
    }
}


// adding the product to cart
const addToCartController = async(req,res) => {
    const {_id,email} = req.body;
    try {
        const addedCart = await Cart.create({email:email,prodID:_id});
        if(!addedCart){
            return res.json({message:"Failed to add to cart."});
        }
        return res.json({message:"successfully added.",addedCart:addedCart});
    }catch(error) {
        return res.json({message:"Server Error",error:error});
    }
}

module.exports = {getCartProductController,addToCartController};