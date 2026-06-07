const express = require("express");
const app = express();

const bookRoutes = require("./bookRoutes");

 app.use(express.json());
 app.use("/books",bookRoutes);

 app.listen(3000,"0.0.0.0",() => {
   console.log("Sever is running on port 3000");
 });