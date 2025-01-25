import { where } from "sequelize";
import db from "../models/index";
import emailService from "./emailService";
require("dotenv").config();

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
        });
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
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
module.exports = {
  PatientBooking,
};
