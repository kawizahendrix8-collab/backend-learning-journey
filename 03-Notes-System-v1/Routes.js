const express = require("express");
const router = express.Routes();

const {notes} = require("./Controller");

router.post("/",notes);

module.exports = router;