let books = require("./data/books");

exports.getBooks = (req,res) => {
  res.json(books);
};

exports.getOneBook = (req,res) =>{
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if(!book){
    return res.status(404).json({message:"Book not found"});
  }
  res.json(book);
};

exports.postBooks = (req,res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json({
    message: "Book Created",
    book: newBook
  });
};

exports.putBook = (req,res) =>{
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if(!book){
    return res.status(404).json({message:"Book not found"});
  }
  const updateData = req.body;
  
  book.name = updateData.name;
  res.json({
    message:"Book Updated",
    book
  });
};

exports.deleteBook = (req,res) =>{
  const bookId = parseInt(req.params.id);
  book = books.filter(b => b.id !== bookId); 
  res.json({
    message:"Book Deleted"
  });
};