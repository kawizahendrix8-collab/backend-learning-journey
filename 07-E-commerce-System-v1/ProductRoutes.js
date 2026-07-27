const express = require("express");

    const router = express.Router();
    
    const {createProduct,getProducts,getProductById,updateProduct,deleteProduct} = require("./productController");
    
    router.post("/createProduct", createProduct);
    
    router.get("/getProducts", getProducts);
    
    router.get("/getProductById", getProductById);
    
    router.put("/updateProduct",updateProduct);
    
    router.delete("/deleteProduct",deleteProduct);
    
    exports.module = router;