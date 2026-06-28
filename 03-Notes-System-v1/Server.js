const express = require("express");
const mongoose = require("mongoose");
const NotesRoutes = require("./Routes");

const app = express();

app.use(express.json());
app.use("/notes",NotesRoutes);

mongoose.connect(""); // Add your own mongoDb url from mongoDb Atlas it will work 

app.listen(3000,() =>{
  console.log("We are live");
});