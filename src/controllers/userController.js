import e from "express";
import userService from "../services/userService";
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
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleUpdateAUser,
  handleDeleteAUser,
  getAllCode,
  getDoctor,
};
