const express = require("express");
const {
    addNote,
    getNotes,
    removeNote,
    updateNote,
} = require("./notes.controller");
const path = require("path");
const { response } = require("express");
//nodeconst chalk = require("chalk");

const port = 3000;

const app = express();

app.set("view engine", "ejs"); // обозначем express, что работаем с EJS
app.set("views", "pages"); // обозначаем что файлы для рендера берем не из папки views, а из папки pages

app.use(express.static(path.resolve(__dirname, "public"))); //добаляем статический путь для подключения клиентского js

app.use(
    express.urlencoded({
        extended: true,
    })
); // подключаем плагин для декодировки

app.use(express.json()); // подключаем возможность отправлять на сервер данные в формате JSON

app.get("/", async (req, res) => {
    res.render("index", {
        title: "Express App",
        notes: await getNotes(),
        created: false,
    });
});

app.post("/", async (req, res) => {
    await addNote(req.body.title);
    res.render("index", {
        title: "Express App",
        notes: await getNotes(),
        created: true,
    });
});

app.delete("/:id", async (req, res) => {
    removeNote(req.params.id);
    res.render("index", {
        title: "Express App",
        notes: await getNotes(),
        created: false,
    });
});

app.put("/:data", async (req, res) => {
    await updateNote(req.params.data);
    res.render("index", {
        title: "Express App",
        notes: await getNotes(),
        created: false,
    });
});

app.listen(port, () => {
    // console.log(chalk.green("Server has been started ..."));
    console.log(`Server has been started ... on port ${port}`);
});
