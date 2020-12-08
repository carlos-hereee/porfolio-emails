//server
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sendGrid = require("@sendgrid/mail");
const cors = require("cors");
const port = process.env.PORT || 4000;

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

server.get("/api", (req, res) => res.send("Api is running"));
server.post("/api/email", (req, res) => {
  sendGrid.setApiKey(process.env.API_KEY);
  const msg = {
    to: "97hernandez.c@gmail.com",
    from: req.body.email,
    subject: "Portfolio Website Contact",
    html: `This message comes from <b>carloshernandez.tech</b> contact me page, from <b>${req.body.name}</b> says,<br/><br/>${req.body.message}.<br/><br/> Can be reached at ${req.body.email}`,
  };

  sendGrid
    .send(msg)
    .then((response) => res.status(200).json({ success: true }))
    .catch((e) => res.status(200).json({ success: false }));
});

server.listen(port, () =>
  console.log(`\n *** Server listening on port ${port}`)
);
