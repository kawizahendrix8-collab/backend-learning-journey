  const express = require("express");
    const app = express();
    
      const taskRoutes = require("./Routes");
        app.use(express.json());
        app.use("/", taskRoutes);
         
         app.listen(3000,() =>{
           console.log("We are live on port 3000");
});