   const express = require("express");
       const app = express(); 

  const CategoryRoutes = require("./CategoryRoutes"); 
    const productRoutes = require("./productRoutes"); 

     app.use(express.json()); 
    app.use("/", CategoryRoutes);
   app.use("/", productRoutes); 

app.listen(3000, () => { 
  console.log("we are live"); 
})