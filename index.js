const http = require("http");
//nodeconst chalk = require("chalk");

const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request method", req.method);
    console.log("Request url", req.url);
    res.end("Hello from server!!!!");
});
server.listen(port, () => {
    // console.log(chalk.green("Server has been started ..."));
    console.log(`Server has been started ... on port ${port}`);
});
