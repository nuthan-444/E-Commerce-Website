const express = require('express');
const router = express.Router();
const {addToCartController,getCartProductController} = require("../controllers/addToCart");


router.get("/:email",getCartProductController)

router.post("/",addToCartController);


module.exports = router;