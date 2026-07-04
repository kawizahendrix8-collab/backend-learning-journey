const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const userRoutes = require("./Routes");

app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000,  () =>{
  console.log("We are online");
});