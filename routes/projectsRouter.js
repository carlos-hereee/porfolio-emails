const route = require("express").Router();
const Projects = require("./modal/project");

route.get("/", async (req, res) => {
	try {
		const projects = await Projects.getAll();
		res.status(200).json({ projects });
	} catch (e) {
		res.status(404).json({ message: "Whoopsie", e: e });
	}
});
route.post("/", async (req, res) => {
	const new_project = req.body.e;

	try {
		const projects = await Projects.addProject(new_project);
		res.status(200).json({ projects });
	} catch (e) {
		res.status(404).json({ message: "Not Found", e: e });
	}
});
route.delete("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const projects = await Projects.removeProject(id);
		res.status(200).json({ projects });
	} catch (e) {
		res.status(404).json({ message: "Whoopsie", error: e });
	}
});

module.exports = route;
