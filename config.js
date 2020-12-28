require("dotenv").config();

module.exports = {
  sendgrid_key: process.env.SENDGRID_API_KEY,
  port: process.env.PORT,
};
