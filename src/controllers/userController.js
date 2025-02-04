import e from "express";
import userService from "../services/userService";
import { json } from "body-parser";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      message: "Missing email or password",
      errCode: 1,
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    userData: userData.user,
  });
};
let handleGetAllUser = async (req, res) => {
  let id = req.query.id; //all,id
  if (!id) {
    return res.status(200).json({
      errCode: 2,
      errMessage: "Missing id",
      userData: {},
    });
  }
  let users = await userService.handleGetAllUser(id);
  return res.status(200).json({
    errCode: users.errCode,
    errMessage: users.errMessage,
    userData: users.users,
  });
};
let handleCreateNewUser = async (req, res) => {
  if (req.body) {
    let result = await userService.handleCreateNewUser(req.body);
    if (result) {
      return res.status(200).json({
        errCode: result.errCode,
        errMessage: result.errMessage,
      });
    }
  } else {
    return res.status(200).json({
      errCode: 1,
      errMessage: "No data to create user",
    });
  }
};
let handleUpdateAUser = async (req, res) => {
  let id = req.body.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing id to do this action",
    });
  } else {
    let result = await userService.handleUpdateAUser(req.body);
    return res.status(200).json({
      errCode: result.errCode,
      errMessage: result.errMessage,
    });
  }
};
let handleDeleteAUser = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing id to do this action",
    });
  } else {
    let result = await userService.handleDeleteAUser(id);
    if (result) {
      return res.status(200).json(result);
    }
  }
};
let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error at userController: " + error);
    return res.status(200).json(data);
  }
};
let getDoctor = async (req, res) => {
  try {
    let data = await userService.getDoctor();
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error at userController: " + error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "error",
    });
  }
};
let getAllDoctor = async (req, res) => {
  try {
    let data = await userService.getAllDoctor();
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error at userController: " + error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "error",
    });
  }
};
let saveInfoDoctor = async (req, res) => {
  try {
    let data = await userService.saveInfoDoctor(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log("Error at userController: " + error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "error",
    });
  }
};
let getDetailDoctor = async (req, res) => {
  try {
    let data = await userService.getDetailDoctor(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let saveSchedule = async (req, res) => {
  try {
    let data = await userService.saveSchedule(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let getAllScheduleByDay = async (req, res) => {
  try {
    let data = await userService.getAllScheduleByDay(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let CreateNewSpecialty = async (req, res) => {
  try {
    let data = await userService.CreateNewSpecialty(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetAllSpecialty = async (req, res) => {
  try {
    let data = await userService.GetAllSpecialty();
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetAllDoctorBySpecialty = async (req, res) => {
  try {
    let data = await userService.GetAllDoctorBySpecialty(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetDetailSpecialty = async (req, res) => {
  try {
    let data = await userService.GetDetailSpecialty(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetDoctorByProvince = async (req, res) => {
  try {
    let data = await userService.GetDoctorByProvince(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let CreateNewClinic = async (req, res) => {
  try {
    let data = await userService.CreateNewClinic(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetAllClinic = async (req, res) => {
  try {
    let data = await userService.GetAllClinic();
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let GetAllDoctorByClinic = async (req, res) => {
  try {
    let data = await userService.GetAllDoctorByClinic(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(">", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleUpdateAUser,
  handleDeleteAUser,
  getAllCode,
  getDoctor,
  getAllDoctor,
  saveInfoDoctor,
  getDetailDoctor,
  saveSchedule,
  getAllScheduleByDay,
  CreateNewSpecialty,
  GetAllSpecialty,
  GetAllDoctorBySpecialty,
  GetDetailSpecialty,
  GetDoctorByProvince,
  CreateNewClinic,
  GetAllClinic,
  GetAllDoctorByClinic,
};
