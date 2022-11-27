const path = require("path");

console.log(path.dirname(__filename)); //путь в которой лежит файл

console.log(path.basename(__filename)); //название файла
console.log(path.extname(__filename.slice(1))); //получаем расширение файла без точки
console.log(path.parse(__filename)); // получаем расширенную информацию о файле
console.log(path.resolve(__dirname, "..", "./modules", "./app.js")); // допступ к файлу app.js который лежит на уровень выше в папке modules
console.log(path.join(__dirname, "..", "./modules", "./app.js")); // join делает тоже самое что и resolve но resolve ищет конкретный файл join контетинирует строчки
