const express = require("express");
const router = express.Router();

const {notes} = require("./Controller");

router.post("/",notes);

module.exports = Router;