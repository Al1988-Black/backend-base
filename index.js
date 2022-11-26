const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, getNotes } = require("./node.controller");

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
});

yargs.command({
    command: "list",
    describe: "Print all notes",
    handler() {
        const notes = getNotes();
        console.log(notes);
    },
});

yargs.parse();
