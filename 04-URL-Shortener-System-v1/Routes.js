const express = require("express");
   const router = express.Router();
   
   const { shortCode } = require("./Controller");
   
   router.post("/", shortCode);
   
module.exports = router;