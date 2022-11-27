// const { default: chalk } = require("chalk");
const fs = require("fs/promises"); // подключаем file system
const path = require("path"); // подключаем пути

const notesPath = path.join(__dirname, "db.json"); //делаем корректный путь к папке

async function addNote(title) {
    const notes = await getNotes();
    const note = {
        title,
        id: Date.now().toString(),
    };

    notes.push(note);
    await fs.writeFile(notesPath, JSON.stringify(notes)); // записываем новую запись в db.json
    console.log(`Note with title ${title} was added`);
    // console.log(chalk.bgGreen("Note was added"));
}

async function getNotes() {
    const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function removeNote(id) {
    const notes = await getNotes();

    const newNotes = notes.filter((note) => note.id !== id);
    await fs.writeFile(notesPath, JSON.stringify(newNotes)); // записываем новую запись в db.json
    console.log(`Note with ${id} delete`);
    // console.log(chalk.bgGreen("Note was added"));
}

async function updateNote(data) {
    const updateNote = JSON.parse(data);
    const notes = await getNotes();
    const indexUpdate = notes.findIndex((note) => note.id === updateNote.id);
    console.log(indexUpdate);
    notes[indexUpdate] = { title: updateNote.title, id: updateNote.id };
    await fs.writeFile(notesPath, JSON.stringify(notes)); // записываем новую запись в db.json
    console.log(`Note with ${updateNote.id} updated`);
    //console.log(chalk.bgGreen("Note was added"));
}

async function printNotes() {
    const notes = await getNotes();
    // console.log(chalk.bgBlue("Here is the list of notes:"));
    console.log("Here is the list of notes:");
    notes.forEach((note) => {
        // console.log(chalk.bgGray(note.title));
        console.log(note.id, note.title);
    });
}

module.exports = {
    addNote,
    getNotes,
    printNotes,
    removeNote,
    updateNote,
};
