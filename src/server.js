import express from "express";
import bodyParser from "body-parser";
require("dotenv").config();
import initWebRoutes from "./route/web";
import configViewEngine from "./config/viewEngine";
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//config view engine
configViewEngine(app);
//init all web routes
initWebRoutes(app);
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
