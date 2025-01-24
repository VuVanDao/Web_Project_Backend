import db from "../models/index";
import emailService from "./emailService";
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
        await emailService.sendEmail({
          email: data.email,
          name: "VuVanDao",
          doctorName: "NguyenVanA",
          time: "8h-9h",
          day:
            new Date().getDate() +
            "/" +
            new Date().getMonth() +
            1 +
            "/" +
            new Date().getFullYear(),
          address: "Nam Dinh",
          price: "100,000VNĐ",
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
