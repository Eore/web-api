let bodyParser = require("body-parser");
let cors = require("cors");

module.exports = app => {
  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Z-Tech");
    next();
  });
  // app.use(
  //   cors({
  //     // origin: "http://dev.rsiazainab.co.id",
  //     credentials: true
  //   })
  // );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  return app;
};
