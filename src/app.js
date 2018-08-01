let http = require("http");
let express = require("express");
let app = express();
let port = process.env.PORT || 8000;
app = require("./deps/middleware")(app);
app = require("./core/apiRoute")(app);
http
  .createServer(app)
  .listen(port, () => console.log(`Server run in port ${port}`));
