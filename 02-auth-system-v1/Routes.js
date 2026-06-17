const express = require("express");
const router = express.Router();

const {signUp , login} = require("./Controller");
router.post("/", signUp);
router.post("/", login);

module.exports = router;