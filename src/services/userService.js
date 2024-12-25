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
module.exports = {
  handleUserLogin: handleUserLogin,
  handleGetAllUser: handleGetAllUser,
};
