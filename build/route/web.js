"use strict";

var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _bookingController = _interopRequireDefault(require("../controllers/bookingController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get("/", _homeController["default"].getHomePage);
  router.get("/about", _homeController["default"].getAboutPage);
  router.get("/crud", _homeController["default"].getCRUD);
  router.post("/post-crud", _homeController["default"].postCRUD);
  router.get("/get-crud", _homeController["default"].displayCRUD);
  router.get("/update-crud/:id", _homeController["default"].updateCRUD);
  router.post("/put-crud", _homeController["default"].getUpdateUser);
  router.get("/delete-crud", _homeController["default"].deleteCRUD);
  router.post("/delete-crud-2", _homeController["default"].deleteUser);
  router.get("/allCode", _userController["default"].getAllCode);
  router.get("/yugioh", _homeController["default"].getInformation);
  router.get("/yugioh-search/", _homeController["default"].getInformationSearch);
  router.get("/yugioh-detail/", _homeController["default"].getInformationById);
  router.get("/marvel", _homeController["default"].getCharacterMarvel);
  router.post("/api/login", _userController["default"].handleLogin);
  router.get("/api/get-all-users", _userController["default"].handleGetAllUser);
  router.post("/api/create-new-users", _userController["default"].handleCreateNewUser);
  router.put("/api/update-a-users", _userController["default"].handleUpdateAUser);
  router["delete"]("/api/delete-a-users", _userController["default"].handleDeleteAUser);
  router.get("/api/get-doctor", _userController["default"].getDoctor);
  router.get("/api/get-all-doctor", _userController["default"].getAllDoctor);
  router.post("/api/save-info-doctor", _userController["default"].saveInfoDoctor);
  router.get("/api/get-detail-doctor", _userController["default"].getDetailDoctor);
  router.post("/api/save-schedule", _userController["default"].saveSchedule);
  router.get("/api/get-all-schedule-by-day", _userController["default"].getAllScheduleByDay);
  router.post("/api/create-new-specialty", _userController["default"].CreateNewSpecialty);
  router.get("/api/get-all-specialty", _userController["default"].GetAllSpecialty);
  router.get("/api/get-all-doctor-by-specialty", _userController["default"].GetAllDoctorBySpecialty);
  router.get("/api/get-doctor-by-province", _userController["default"].GetDoctorByProvince);
  router.get("/api/get-detail-specialty", _userController["default"].GetDetailSpecialty);
  router.post("/api/create-new-clinic", _userController["default"].CreateNewClinic);
  router.get("/api/get-all-clinic", _userController["default"].GetAllClinic);
  router.get("/api/get-all-doctor-by-clinic", _userController["default"].GetAllDoctorByClinic);
  router.get("/api/get-detail-clinic", _userController["default"].GetDetailClinic);
  //handBook
  router.post("/api/create-new-handBook", _userController["default"].CreateNewHandBook);
  router.get("/api/get-all-handBook", _userController["default"].GetAllHandBook);
  router.post("/api/send-remedy", _userController["default"].SendRemedy);
  router.get("/api/get-patient-booked", _bookingController["default"].PatientBooked);
  router.post("/api/patient-booking", _bookingController["default"].PatientBooking);
  router.post("/api/verify-booking", _bookingController["default"].VerifyBooking);
  return app.use("/", router);
};
module.exports = initWebRoutes;