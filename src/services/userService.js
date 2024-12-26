import db from "../models/index";
import axios from "axios";
import bcrypt from "bcryptjs";
import { raw } from "body-parser";
import { where } from "sequelize";
let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);
let handleUserLogin = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let UserData = {};
      let EmailIsExits = await checkUserEmail(email);
      let PasswordIsExits = await checkUserPassword(email, password);
      if (EmailIsExits && PasswordIsExits) {
        UserData.errCode = 0;
        UserData.errMessage = "Ok";
        UserData.user = EmailIsExits;
        resolve(UserData);
      } else {
        UserData.errCode = 1;
        UserData.errMessage = "Email or password not correct !!!!!";
        UserData.user = {};
        resolve(UserData);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserEmail = async (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
        raw: true,
        attributes: {
          exclude: ["password"],
        },
      });
      if (user) {
        resolve(user);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let checkUserPassword = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
        raw: true,
      });
      if (user) {
        let check = bcrypt.compareSync(password, user.password);
        if (check) {
          resolve(user);
        } else {
          resolve(false);
        }
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleGetAllUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL" || userId === "all") {
        let data = await db.User.findAll({
          raw: true,
          attributes: {
            exclude: ["password"],
          },
        });
        if (data && data.length > 0) {
          users = data;
          resolve({
            errCode: 0,
            errMessage: "Found all user",
            users,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not found any user",
            users,
          });
        }
      } else {
        let data = await db.User.findAll({
          raw: true,
          where: {
            id: userId,
          },
          attributes: {
            exclude: ["password"],
          },
        });
        if (data && data.length > 0) {
          users = data;
          resolve({
            errCode: 0,
            errMessage: "Found user with id " + userId,
            users,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not found any user",
            users,
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};
let handleCreateNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        reject({
          errCode: 2,
          errMessage: "Server need data to create user",
        });
      }
      let hashPassword = await hashUserPassword(data.password);
      let checkUserEmailIsExist = await checkUserEmail(data.email);
      if (!checkUserEmailIsExist) {
        let user = await db.User.create({
          email: data.email,
          password: hashPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phoneNumber: data.phoneNumber,
          gender: data.gender === "1" ? true : false,
          roleId: data.roleId,
        });
        if (!user) {
          reject({
            errCode: 1,
            errMessage: "Cannot create user, something happened",
          });
        } else {
          resolve({
            errCode: 0,
            errMessage: "User created",
          });
        }
      } else {
        resolve({
          errCode: 3,
          errMessage: "Email is exist",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleUpdateAUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing id",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: "Not found user with id:" + data.id,
        });
      } else {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        await user.save();
        // let listUser = await db.User.findAll({
        //   raw: true,
        // });
        // resolve(listUser);
        resolve({
          errCode: 0,
          errMessage: "Update user complete",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let handleDeleteAUser = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({ errCode: 1, errMessage: "Missing userId" });
      }
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({ errCode: 1, errMessage: "Not found user with id:" + userId });
      } else {
        await user.destroy();
        resolve({
          errCode: 0,
          errMessage: "Delete user complete",
        });
      }
      // let listUser = await db.User.findAll({
      //   raw: true,
      // });
      // resolve(listUser);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser,
  handleUpdateAUser,
  handleDeleteAUser,
};
