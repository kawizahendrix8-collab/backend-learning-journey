 const express = require("express");
  const app = express();

  const urlRoutes = require("./Routes");

 app.use(express.json());
 
 app.use("/url", urlRoutes);
 
 app.listen(3000, ()=>{
   console.log("We are live on line 3000");
 });