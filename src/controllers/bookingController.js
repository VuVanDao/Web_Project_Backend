import e from "express";
import bookingService from "../services/bookingService";
import { json } from "body-parser";
let PatientBooking = async (req, res) => {
  try {
    let data = await bookingService.PatientBooking(req.body);
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
  PatientBooking,
};
