const route = require("express").Router();
const Projects = require("./modal/project");

route.get("/", async (req, res) => {
	try {
		const projects = await Projects.getAll();
		res.status(200).json({ projects });
	} catch (e) {
		console.log(e);
		res.status(404).json({ message: "Whoopsie", e: e });
	}
});
route.post("/", async (req, res) => {
	const body = req.body;
	try {
		const projects = await Projects.addProject(body);
		console.log("projects", projects);
		res.status(200).json({ projects });
	} catch (e) {
		console.log(e);
	}
});

module.exports = route;
