const fs = require("fs/promises"); // подключаем file system
const path = require("path");

const notesPath = path.join(__dirname, "db.json"); //делаем корректный путь к папке

async function addNote(title) {
    // const notes = require("./db.json");
    // const notes = Buffer.from(buffer).toString("utf-8");
    const notes = await fs.readFile(notesPath, { encoding: "utf-8" });

    console.log(typeof JSON.parse(notes));
    // const note = {
    //     title,
    //     id: Date.now().toString(),
    // };
    // notes.push(note);
    // await fs.writeFile(notesPath, JSON.stringify(notes)); // записываем новую запись в db.json
}
addNote("jfkkf");

function getNotes() {
    return require(notesPath); // выдаем все записи из db.json
}

module.exports = {
    addNote,
    getNotes,
};
