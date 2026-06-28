const express = require("express");
const router = express.Router();

const {createNote,getNotes} = require("./Controller");

router.post("/",createNote);
router.get("/",getNotes);

module.exports = router;