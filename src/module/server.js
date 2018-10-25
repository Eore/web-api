let https = require("https");
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
  https
    .createServer(
      {
        cert: fs.readFileSync(process.cwd() + "/client-cert.pem").toString(),
        key: fs.readFileSync(process.cwd() + "/client-key.pem").toString()
      },
      app
    )
    .listen(port, () => console.log(`Server berjalan di ${port}`));
