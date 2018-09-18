console.log('Starting app!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
// console.log(argv);
const command = argv._[0];
console.log('Command: ', command);


if (command === 'add') {

  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('New note registered');
    notes.logNote(note);    
  } else {
    console.log('Note already registered');
  }

} else if (command === 'list') {

  const notesList = notes.getAll();

  notesList.forEach((note) => {
    notes.logNote(note);
  })

} else if (command === 'read') {

  console.log('Fetching data...');
  const note = notes.getNote(argv.title);
  const message = note ? `Title: ${note.title} Body: ${note.body}` : 'No note was found';
  console.log(message);

} else if (command === 'remove') {

  console.log('Removing note...');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed' : 'No note to remove';

  console.log(message);
} else {

  console.log('Command not recognized');

}