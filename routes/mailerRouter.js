const route = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

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

route.post("/", (req, res) => {
	const mail = req.body;
	const mailOptions = {
		from: mail.email,
		to: process.env.USER,
		subject: mail.subject,
		generateTextFromHTML: true,
		html: `This message comes from <b>carloshernandez.tech</b> contact me page, from <b>${mail.name}</b> says,<br/><br/>${mail.message}.<br/><br/> Can be reached at ${mail.email}`,
	};
	transporter.sendMail(mailOptions, (error, response) => {
		// error ? console.log(error) : console.log(response);
		transporter.close();
	});
});

module.exports = route;
