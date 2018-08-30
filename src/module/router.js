let fs = require("fs");
// let checkPrivillage = require("./checkPrivillage");

module.exports = (app, apiDir, controllerDir) => {
  let api = fs.readdirSync(apiDir);
  api.forEach(route => {
    require(apiDir + "/" + route).forEach(val => {
      app[val.method.toLowerCase()](
        val.url,
        // checkPrivillage(val.privillage),
        require(controllerDir + "/" + val.controller)
      );
    });
  });
  app.use("*", (req, res) => res.status(404).json("API route not found"));
  return app;
};
