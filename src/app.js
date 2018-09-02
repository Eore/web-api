let server = require("./module/server");
let db = require("./module/database");

db.connect().then(() => {
  server.start();
});
