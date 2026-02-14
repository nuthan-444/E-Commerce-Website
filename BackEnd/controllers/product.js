const Product = require("../models/product");



//get product
const getProduct = async(req,res) => {
    let {_id} = req.params;
    try {
        const prodData = await Product.findOne({_id:_id});
        if(!prodData) {
            res.json({message:"There is no such product."})
            return;
        };
        res.json({message:"got the product data.",productData:prodData});
    } catch (error){
        res.json({message:"Failed to Get Product data ! "+error});
    }
}


//getting only types of categories,no duplicate value
const getOnlyCategory = async(req,res) => {
    try {
        const category = await Product.distinct("category");
        if(!category) return res.json("Could not able to fetch it");
        res.json({message:"fetch successfully.",category:category})
    } catch (error) {
        res.json({message:"Server Error",error:error}).status(500);
    }
}



//getting product by category
const getProdByCategory = async(req,res) => {
    const {category} = req.params;
    try {
        const getProd = await Product.find({category});
        if(getProd.length == 0){
            res.json({message:"there is no such category."});
            return;
        }
        res.json({message:"got the products of same category.",cateProd:getProd});
    } catch(error) {
        res.json({message:"Failed to fetch data !",error:error});
    }
}


//adding product
const addProduct = async(req,res) => {
    let {productName,productDescription,category,price,discountPrice,offer,ratings,url} = req.body;
    try {
        const addingProductData = await Product.create({productName,productDescription,category,price,discountPrice,offer,ratings,url});
        res.json({message:"successfully created.",prodDetailsBack:addingProductData});
    } catch (error){
        res.json("Failed to add the product ! "+error);
    }
}




//updating product
const updateProduct = async(req,res) => {
    let {_id,productName,productDescription,category,price,discountPrice,offer,ratings,url} = req.body;
    price = Number(price);
    discountPrice = Number(discountPrice);
    offer = Number(offer);
    ratings = Number(ratings);
    try {
        const udpateProduct = await Product.findOneAndUpdate({_id},{$set : {productName,productDescription,category,price,discountPrice,offer,ratings,url}},{new:true})
        res.json("successfully updated.").status(200);
    } catch (error) {
        res.json("Failed to update the product details ! ",error).status(500);
    }
}




//Deleting Product
const deleteProduct = async(req,res) => {
    const {_id} = req.params;
    try {
        const deletingProduct = await Product.findOneAndDelete({_id});
        return res.json({message:"Successfully Deleted."}).status(200);
    } catch (error) {
        return res.json({message:"Failed to delete the product ! ",error:error}).status(500);
    }
}




module.exports = {getProduct,getProdByCategory,getOnlyCategory,addProduct,updateProduct,deleteProduct}
