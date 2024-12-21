import e from "express";
import db from "../models/index";
import bcrypt from "bcryptjs";
let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);

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
let comparePassword = (password, hashPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = bcrypt.compareSync(password, hashPassword);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        reject("User info is required");
      }
      let hashPassword = await hashUserPassword(data.password);
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
        reject("Error when creating user");
      } else {
        resolve("user created");
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
};
