const express = require("express");
const bodyParser = require("body-parser");
const sendGrid = require("@sendgrid/mail");
const cors = require("cors");
const { port, sendgrid_key } = require("./config");

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(express.json());

server.get("/api", (req, res) => res.send("Api is running"));
server.post("/api/email", (req, res) => {
  sendGrid.setApiKey(sendgrid_key);
  const msg = {
    to: "97hernandez.c@gmail.com",
    from: "carlos-hernandez@lambdastudents.com",
    subject: "Portfolio Website Contact",
    html: `This message comes from <b>carloshernandez.tech</b> contact me page, from <b>${req.body.name}</b> says,<br/><br/>${req.body.message}.<br/><br/> Can be reached at ${req.body.email}`,
  };
  sendGrid
    .send(msg)
    .then(() => res.status(200).json({ status: true }))
    .catch(() => res.status(500).json({ status: false }));
});

server.listen(port, () =>
  console.log(`\n *** Server listening on port ${port}`)
);
