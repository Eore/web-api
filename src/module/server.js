let http = require("http");
let express = require("express");
let app = express();
let fs = require("fs");

let rootDir = process.cwd();
let apiDir = rootDir + "/src/api";
let controllerDir = rootDir + "/src/controllers";
let port = process.env.PORT || 4321;

app.use("/asset", express.static(rootDir + "/storage"));
app = require("./middleware")(app);
app = require("./router")(app, apiDir, controllerDir);

exports.start = () =>
  http
    .createServer(app)
    .listen(port, "0.0.0.0", () => console.log(`Server berjalan di ${port}`));
