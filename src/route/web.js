import express from "express";
let router = express.Router();
import homeController from "../controllers/homeController";
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  return app.use("/", router);
};
module.exports = initWebRoutes;
