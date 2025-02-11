import e from "express";
import bookingService from "../services/bookingService";
import { json } from "body-parser";
let PatientBooking = async (req, res) => {
  try {
    let data = await bookingService.PatientBooking(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log("PatientBooking-error", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let VerifyBooking = async (req, res) => {
  try {
    let data = await bookingService.VerifyBooking(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log("VerifyBooking-error:", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
let PatientBooked = async (req, res) => {
  try {
    let data = await bookingService.PatientBooked(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.log("PatientBooked-error:", error);
    return res.status(200).json({
      errCode: 1,
      errMessage: "Something wrong",
    });
  }
};
module.exports = {
  PatientBooking,
  VerifyBooking,
  PatientBooked,
};
