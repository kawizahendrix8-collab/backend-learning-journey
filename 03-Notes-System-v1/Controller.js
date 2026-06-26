const Note = require("./data/Note");

const createNote = async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  
  await newNote.save();
  res.send("Note saved!");
};

const getNotes = async (req, res) => {
  const allNotes = await Note.find();
  res.json(allNotes);
};

module.exports = { createNote, getNotes };