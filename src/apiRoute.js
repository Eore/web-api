let fs = require("fs");
let checkPrivillage = require("./checkPrivillage");

module.exports = app => {
  let api = fs.readdirSync("./src/api");
  api.forEach(route => {
    require("./api/" + route).forEach(val => {
      app[val.method.toLocaleLowerCase()](
        "/api/v1" + val.url,
        checkPrivillage(val.privillage),
        require("./controllers/" + val.controller)
      );
    });
  });
  app.use("*", (req, res) => res.status(404).json("API route not found"));
  return app;
};
