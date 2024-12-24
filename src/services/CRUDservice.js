import express from "express";
import db from "../models/index";
import bcrypt from "bcryptjs";
import { raw } from "body-parser";
import axios from "axios";
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
let getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
      });
      if (!users) {
        reject("Error when getting all users");
      } else {
        resolve(users);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getInfoUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        reject("User id is required");
      }
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (!user) {
        reject("User not found");
      } else {
        resolve(user);
      }
    } catch (error) {
      reject(error);
    }
  });
};
let updateUserData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        reject("User id is required");
      }
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (!user) {
        reject("User not found");
      }
      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.address = data.address;
      user.phoneNumber = data.phoneNumber;
      await user.save();
      let listUser = await db.User.findAll({
        raw: true,
      });
      resolve(listUser);
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUserById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        reject("User id is required");
      }
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        reject("User not found");
      }
      await user.destroy();
      let listUser = await db.User.findAll({
        raw: true,
      });
      resolve(listUser);
    } catch (error) {
      reject(error);
    }
  });
};
let getInformation = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // https://db.ygoprodeck.com/api/v7/cardsets.php
      // https://db.ygoprodeck.com/api/v7/archetypes.php
      const response = await axios
        .get(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark Magician"
        )
        .then((response) => {
          resolve(response.data);
        });
    } catch (error) {
      console.error("Lỗi:", error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  updateUserData: updateUserData,
  getInfoUserById: getInfoUserById,
  deleteUserById: deleteUserById,
  getInformation: getInformation,
};
