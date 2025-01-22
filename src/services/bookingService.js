import db from "../models/index";
import axios from "axios";
import bcrypt from "bcryptjs";
import { raw } from "body-parser";
import { where } from "sequelize";
require("dotenv").config();

let PatientBooking = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.doctorId) {
        resolve({
          errCode: 1,
          errMassage: "Missing email",
        });
      } else {
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            email: data.email,
            roleId: "R3",
          },
        });
        if (user && user[0]) {
          await db.Booking.findOrCreate({
            where: {
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
            defaults: {
              statusId: "S1",
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.date,
              timeType: data.timeType,
            },
          });
        }
        resolve({
          errMassage: "success",
          data: user,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  PatientBooking,
};
