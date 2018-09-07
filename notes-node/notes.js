console.log('Starting notes.js...');

const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    console.log('Getting notes');
};

const readNote = (title) => {
    return fetchNotes().filter((note) => note.title === title)[0];
};

const removeNote = (title) => {
    let notesArray = fetchNotes();
    let filteredNotes = notesArray.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notesArray.length !== filteredNotes.length;
};

const logNote = (note) => {
    debugger;
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote, // = addNote: addNote
    getAll,
    readNote,
    removeNote,
    logNote
};