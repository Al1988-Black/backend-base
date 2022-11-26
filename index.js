const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes, deleteNote } = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            descride: "Not title",
            demandOption: true,
        },
    },
    handler({ title }) {
        addNote(title);
    },
}); //  node index add --title=new     - добаление новой заметки с title new

yargs.command({
    command: "delete",
    describe: "Remove note by id",
    builder: {
        id: {
            type: "string",
            descride: "Not id",
            demandOption: true,
        },
    },
    handler({ id }) {
        deleteNote(id);
    },
}); //    node index delete --id=1669471743689 - удаление заметки с id 1669471743689

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        printNotes();
    },
}); //   node index list     -команда показ листа заметок

yargs.parse();
