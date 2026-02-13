const express = require('express');
const router = express.Router();
const {addToCartController,getCartProductIdController,getAllCardProduct,removeOneProductFromCartController} = require("../controllers/addToCart");


router.get("/:email",getCartProductIdController);


router.get("/allcartproduct/:allprodid",getAllCardProduct);


router.post("/",addToCartController);


router.delete("/removeoneproductfromcart/:prodID/:email",removeOneProductFromCartController)




module.exports = router;