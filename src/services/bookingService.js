import { where } from "sequelize";
import db from "../models/index";
import emailService from "./emailService";
import { reject } from "lodash";
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
let URL = (doctorId, token) => {
  let result = "";

  result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`;
  return result;
};
let PatientBooking = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.email ||
        !data.doctorId ||
        !data.date ||
        !data.timeType ||
        !data.userName
      ) {
        resolve({
          errCode: 1,
          errMassage: "Missing email",
        });
      } else {
        let dataDoctor = await db.Doctor_info.findOne({
          where: {
            doctorId: data.doctorId,
          },
          raw: true,
          nest: true,
          attributes: {
            exclude: ["password", "createdAt", "updatedAt", "id", "doctorId"],
          },
          include: [
            {
              model: db.AllCode,
              as: "priceTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "provinceTypeData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "paymentTypeData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
        });
        let token = uuidv4();
        await emailService.sendEmail({
          email: data.email,
          name: data.userName,
          doctorName: data.doctorName,
          time: data.timeType,
          day: data.date,
          address: data.address,
          price:
            data.language === "vi"
              ? dataDoctor.priceTypeData.valueVi + " VND"
              : dataDoctor.priceTypeData.valueEn + " USD",
          language: data.language,
          url: URL(data.doctorId, token),
        });
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            firstName: data.userName,
            address: data.address,
            email: data.email,
            roleId: "R3",
            gender: data.gender,
          },
        });
        if (user && user[0]) {
          await db.Booking.findOrCreate({
            where: {
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.cloneState.date,
              timeType: data.cloneState.timeType,
            },
            defaults: {
              statusId: "S1",
              doctorId: data.doctorId,
              patientId: user[0].id,
              date: data.cloneState.date,
              timeType: data.cloneState.timeType,
              token: token,
            },
          });
        }
        resolve({
          errMassage: "success",
          data: user[0],
          errCode: 0,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let VerifyBooking = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.token || !data.doctorId) {
        resolve({
          errCode: 1,
          errMassage: "Missing parameter",
        });
      } else {
        let res = await db.Booking.findOne({
          where: {
            doctorId: data.doctorId,
            token: data.token,
            statusId: "S1",
          },
        });
        if (res) {
          res.statusId = "S2";
          await res.save({});
          resolve({
            errCode: 0,
            errMessage: "Complete",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not Complete",
          });
        }
      }
    } catch (error) {
      console.log(">>", error);

      reject(error);
    }
  });
};
let PatientBooked = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.date || !data.doctorId) {
        resolve({
          errCode: 1,
          errMassage: "Missing parameter",
        });
      } else {
        let res = await db.Booking.findAll({
          where: {
            doctorId: data.doctorId,
            date: data.date,
            statusId: "S2",
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "token"],
          },
          include: [
            {
              model: db.User,
              as: "bookingData",
              attributes: [
                "firstName",
                "email",
                "address",
                "gender",
                "phoneNumber",
              ],
            },
          ],
        });
        if (res) {
          resolve({
            errCode: 0,
            errMessage: "Complete",
            data: res,
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "Not Complete",
          });
        }
      }
    } catch (error) {
      console.log(">>", error);

      reject(error);
    }
  });
};
module.exports = {
  PatientBooking,
  VerifyBooking,
  PatientBooked,
};
