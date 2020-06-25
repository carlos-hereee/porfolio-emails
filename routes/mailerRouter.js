const route = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { response } = require("express");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	"https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const accessToken = oauth2Client.getAccessToken();

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAuth2",
		user: process.env.USER,
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		refreshToken: process.env.REFRESH_TOKEN,
		accessToken: accessToken,
	},
});
const mailOptions = {
	from: process.env.USER,
	to: process.env.USER,
	subject: "Node.js Email with Secure OAuth",
	generateTextFromHTML: true,
	html: "<b>test</b>",
};

route.get("/", (req, res) => {
	transporter.sendMail(mailOptions, (error, response) => {
		error ? console.log(error) : console.log(response);
		transporter.close();
	});
});

module.exports = route;
