const express = require("express");
const router = express.Router();
const { getBooks,getOneBook, postBooks , putBook, deleteBook } = require("./bookController");

router.get("/", getBooks);
router.get("/:id", getOneBook);
router.post("/", postBooks);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

module.exports = router;