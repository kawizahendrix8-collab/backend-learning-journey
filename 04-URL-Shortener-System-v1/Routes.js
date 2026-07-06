const express = require("express");
   const router = express.Router();
   
   const { shortCode , redirectToUrl } = require("./Controller");
   
   router.post("/", shortCode);
   router.get("/:shortCode",redirectToUrl);
   
module.exports = router;