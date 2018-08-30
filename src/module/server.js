let http = require("http");
let express = require("express");
let app = express();

let rootDir = process.cwd();
let apiDir = rootDir + "/src/api";
let controllerDir = rootDir + "/src/controllers";
let port = process.env.PORT || 8000;

app = require("./middleware")(app);
app = require("./router")(app, apiDir, controllerDir);

exports.startServer = () =>
  http
    .createServer(app)
    .listen(port, () => console.log(`Server run in port ${port}`));
