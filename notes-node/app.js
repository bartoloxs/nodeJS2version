console.log('Starting app!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const bodyOptions = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
};
const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
const command = argv._[0];


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
  console.log(`Printing ${notes.length}(s)`);
  notesList.forEach(note => notes.logNote(note));

} else if (command === 'read') {

  console.log('Fetching data...');
  const note = notes.getNote(argv.title);
  const message = note ? `Title: ${note.title} Body: ${note.body}` : 'No note was found';
  notes.logNote(note);
  console.log(message);

} else if (command === 'remove') {

  console.log('Removing note...');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed' : 'No note to remove';

  console.log(message);
} else {

  console.log('Command not recognized');

}