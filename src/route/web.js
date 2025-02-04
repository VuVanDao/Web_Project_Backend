import express from "express";
let router = express.Router();
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import bookingController from "../controllers/bookingController";
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/update-crud/:id", homeController.updateCRUD);
  router.post("/put-crud", homeController.getUpdateUser);
  router.get("/delete-crud", homeController.deleteCRUD);
  router.post("/delete-crud-2", homeController.deleteUser);

  router.get("/allCode", userController.getAllCode);

  router.get("/yugioh", homeController.getInformation);
  router.get("/yugioh-search/", homeController.getInformationSearch);
  router.get("/yugioh-detail/", homeController.getInformationById);

  router.get("/marvel", homeController.getCharacterMarvel);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUser);
  router.post("/api/create-new-users", userController.handleCreateNewUser);
  router.put("/api/update-a-users", userController.handleUpdateAUser);
  router.delete("/api/delete-a-users", userController.handleDeleteAUser);
  router.get("/api/get-doctor", userController.getDoctor);
  router.get("/api/get-all-doctor", userController.getAllDoctor);
  router.post("/api/save-info-doctor", userController.saveInfoDoctor);
  router.get("/api/get-detail-doctor", userController.getDetailDoctor);
  router.post("/api/save-schedule", userController.saveSchedule);
  router.get(
    "/api/get-all-schedule-by-day",
    userController.getAllScheduleByDay
  );
  router.post("/api/create-new-specialty", userController.CreateNewSpecialty);
  router.get("/api/get-all-specialty", userController.GetAllSpecialty);
  router.get(
    "/api/get-all-doctor-by-specialty",
    userController.GetAllDoctorBySpecialty
  );
  router.get("/api/get-doctor-by-province", userController.GetDoctorByProvince);
  router.get("/api/get-detail-specialty", userController.GetDetailSpecialty);
  router.post("/api/create-new-clinic", userController.CreateNewClinic);
  router.get("/api/get-all-clinic", userController.GetAllClinic);
  router.get(
    "/api/get-all-doctor-by-clinic",
    userController.GetAllDoctorByClinic
  );

  router.post("/api/patient-booking", bookingController.PatientBooking);
  router.post("/api/verify-booking", bookingController.VerifyBooking);
  return app.use("/", router);
};
module.exports = initWebRoutes;
