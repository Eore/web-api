let http = require("http");
let express = require("express");
let app = express();
let port = process.env.PORT || 8000;
app = require("./libs/middleware")(app);
app = require("./apiRoute")(app);
http
  .createServer(app)
  .listen(port, () => console.log(`Server run in port ${port}`));
