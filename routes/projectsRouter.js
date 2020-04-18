const route = require("express").Router();
const Projects = require("./modal/project");

route.get("/", async (req, res) => {
	try {
		const projects = await Projects.getAll();
		res.status(200).json({ projects });
	} catch (e) {
		console.log(e);
	}
});

module.exports = route;
