const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: `gmail`,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_APP_PASS, // generated ethereal password
  },
});

module.exports = transporter;
