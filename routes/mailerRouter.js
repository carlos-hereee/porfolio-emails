const route = require("express").Router();

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "97hernandez.c@gmail.com",
		pass: "Parodox12",
	},
});

async function main() {
	// send mail with defined transport object
	let mailOptions = await transporter.sendMail({
		from: "97hernandez.c@gmail.com", // sender address
		to: "97hernandez.c@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	});
}

route.get("/", (req, res) => {
	res.send("mailer");
	console.log("main(", main());
});

module.exports = route;
