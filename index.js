const http = require("http");
const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const { addNote } = require("./notes.controller");
//nodeconst chalk = require("chalk");

const port = 3000;
const basePath = path.join(__dirname, "pages");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
); // подключаем плагин для декодировки

app.get("/", (req, res) => {
    res.sendFile(path.join(basePath, "index.html"));
});

app.post("/", async (req, res) => {
    await addNote(req.body.title);
    res.sendFile(path.join(basePath, "index.html"));
});

app.listen(port, () => {
    // console.log(chalk.green("Server has been started ..."));
    console.log(`Server has been started ... on port ${port}`);
});
