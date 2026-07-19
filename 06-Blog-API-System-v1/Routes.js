 
   const express = require("express");
     
     const router = express.Router();
     
     const {createPost, getAllPosts, getPostById,updatePost, deletePost} = require ("./Controller");
     
      router.post("/posts",createPost);
      
      router.get("/posts", getAllPosts);
      
      router.get("/posts/:id", getPostById);
      
      router.put("/posts/:id", updatePost);
      
      router.delete("/posts/:id", deletePost);
      
      module.exports = router;