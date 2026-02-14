const express = require("express");
const router = express.Router();
const {getProduct,getProdByCategory,getOnlyCategory,addProduct,updateProduct,deleteProduct} = require("../controllers/product");

router.get("/_id/:_id",getProduct);

router.get("/category/:category",getProdByCategory);

router.get("/category",getOnlyCategory);

router.post("/",addProduct);

router.put("/",updateProduct);

router.delete("/:_id",deleteProduct);


module.exports = router;