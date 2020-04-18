//server
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const mailerRouter = require("./routes/mailerRouter");
const projectRouter = require("./routes/projectsRouter");
const port = process.env.PORT || 4000;

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/mail", mailerRouter);
server.use("/projects", projectRouter);
server.get("/", (req, res) => res.send("Api is running"));

server.listen(port, () =>
	console.log(`\n *** Server listening on port ${port}`)
);
