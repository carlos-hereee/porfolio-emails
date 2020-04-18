const route = require("express").Router();

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

route.get("/", (req, res) => {
	res.send("mailer");
});

module.exports = route;
