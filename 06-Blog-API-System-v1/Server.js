  
  const express = require("express");
     const app = express();
     
       const blogRoutes = require("./Routes");
       
        app.use(express.json());
        app.use("/", blogRoutes);
        
 app.listen(3000,()=>{
   console.log("we are live on port 3000");
 });