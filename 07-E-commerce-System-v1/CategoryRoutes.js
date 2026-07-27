const express = require("express");
  const router = express.Router();
  
  const {createCategory, getCatergory, getCatergoryById,updateCategory,deleteCategory} = require("./categoryController");
  
  router.post("/createCategory",createCategory);
  
  router.get("/getCatergory",getCatergory);
  router.get("/getCatergoryById/:id" getCatergoryById);
  
  router.put("/updateCategory/:id",updateCategory);
  
  router.delete("/deleteCategory/:id",deleteCategory);
  
  exports.module = router;