const fs = require("fs/promises");
const fsSync = require("fs");

const path = require("path");

const base = path.join(__dirname, "temp"); // путь и название создаваемой папки (в текущей директории создаем папку темп)

// fs.mkdir(base)
//     .then(() => {
//         console.log("folder created");
//     })
//     .catch((err) => console.log("error", err));

// async function start() {
//     try {
//         await fs.mkdir(base);
//         console.log("folder created");
//         await fs.writeFile(path.join(base, "log.txt"), process.argv[2] ?? "");
//     } catch (err) {
//         console.log("error", err);
//     }
// }

const getContent = () => `\n\r${process.argv[2]}`;

async function start() {
    try {
        if (fsSync.existsSync(base)) {
            await fs.appendFile(path.join(base, "log.txt"), getContent() ?? ""); // если папка существует то мы записываем в нее файл, метод appendFile не перезаписывает файл, а добавляет в него новый контент
            const data = await fs.readFile(path.join(base, "log.txt"), {
                encoding: "utf-8",
            }); //метод fs.readFile считывает файл
            console.log(data);
        } else {
            await fs.mkdir(base);
            await fs.writeFile(
                path.join(base, "log.txt"),
                process.argv[2] ?? ""
            ); // если папки нет то сначала создаем папку а потом записываемв нее файл если команду node fs first_log  вызвать два раза то не будет два loga т.k метод write File перезаписывает файл
        }
    } catch (err) {
        console.log("error", err);
    }
}

start();
