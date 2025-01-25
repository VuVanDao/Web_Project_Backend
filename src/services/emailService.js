require("dotenv").config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_APP,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

let sendEmail = async (data) => {
  if (data.language === "vi") {
    const info = await transporter.sendMail({
      from: '"(☞ﾟヮﾟ)☞ Van Dao👻 ☜(ﾟヮﾟ☜)" <dao28901@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "Thông tin lịch khám đã đặt tại BookingCare", // Subject line
      text: `Xin chào ${data.name}`, // plain text body
      html: `<h1>Xin chào ${data.name} , cảm ơn bạn tin tưởng và đặt lịch khám tại BookingCare</h1>
      <p>Thông tin lịch hẹn của bạn như sau:</p>
      <p>Bác sĩ: ${data.doctorName}</p>
      <p>Thời gian: ${data.time}</p>
      <p>Ngày: ${data.day}</p>
      <p>Địa chỉ: ${data.address}</p>  
      <p>Chi phí: ${data.price}</p>
      <p>Nếu các thông tin trên là chính xác ,hãy xác nhận ở phía dưới,Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi</p>  
      <a href="#!">Xác nhận</a>
      `, // html body
    });
  } else {
    const info = await transporter.sendMail({
      from: '"(☞ﾟヮﾟ)☞ Van Dao👻 ☜(ﾟヮﾟ☜)" <dao28901@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "Appointment information booked at BookingCare", // Subject line
      text: `Hello ${data.name}`, // plain text body
      html: `<h1>Hello ${data.name} , Thank you for your trust and appointment at BookingCare.</h1>
      <p>Your appointment information is as follows::</p>
      <p>Doctor: ${data.doctorName}</p>
      <p>Time: ${data.time}</p>
      <p>Date: ${data.day}</p>
      <p>Address: ${data.address}</p>  
      <p>Price: ${data.price}</p>
      <p>If the above information is correct, please confirm below. Thank you for using our service.</p>  
      <a href="#!">Confirm</a>
      `, // html body
    });
  }
};
module.exports = {
  sendEmail,
};
