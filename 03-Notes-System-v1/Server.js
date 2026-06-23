const express = require("express");
const mongoose = require("mongoose");
const NotesRoutes = require("./Routes");

const app = express();

app.use(express.json());
app.use("/notes",NotesRoutes);

mongoose.connect("");

app.listen(3000,() =>{
  console.log("We are live");
});