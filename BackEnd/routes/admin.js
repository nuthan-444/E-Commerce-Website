const express = require("express");
const router = express.Router();
const {getProduct,getProdByCategory,addProduct,updateProduct,deleteProduct} = require("../controllers/product");

router.get("/_id/:_id",getProduct);

router.get("/category/:category",getProdByCategory);

router.post("/",addProduct);

router.put("/",updateProduct);

router.delete("/",deleteProduct);

module.exports = router;