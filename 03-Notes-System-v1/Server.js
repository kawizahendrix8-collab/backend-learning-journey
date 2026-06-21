const express = require("express");
const app = express();

const NotesRoutes = require("./routes");

app.use(express.json());
app.use("/notes",NotesRoutes);

app.listen(3000,() =>{
  console.log("We are live");
});