console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

function addNote (title, body) {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicatesNotes = notes.filter(note => note.title === title);

  if (duplicatesNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

}

function getAll () {  
  console.log('Getting all notes');
  return fetchNotes();
}

function getNote (title) {
  console.log('Getting note: ', title);
  const notes = fetchNotes();
  const note = notes.find(note => note.title === title);

  return note;
  
}

function removeNote (title) {
  console.log('Removing note: ', title);
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

function logNote (note) {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};