let bodyParser = require("body-parser");
let cors = require("cors");
let multer = require("multer");
let upload = multer({ dest: "storage/" });

module.exports = app => {
  app.use((_, res, next) => {
    res.setHeader("X-Powered-By", "Z-Tech");
    next();
  });
  app.use(cors());
  // app.use(
  //   cors({
  //     // origin: "http://dev.rsiazainab.co.id",
  //     credentials: true
  //   })
  // );
  // app.use(upload.single("foto"));
  app.use(upload.fields([{ name: "foto" }, { name: "gambar" }]));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  return app;
};
