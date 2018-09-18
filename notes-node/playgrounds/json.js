// // var obj = {
// //   name: 'Carlos'
// // };

// // var stringObj = JSON.stringify(obj);

// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
  title: 'Some tisldkasjdtle',
  body: 'Sombe bodsdasdsy'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);