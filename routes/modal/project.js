const db = require("../../data/db-config");

module.exports = {
	getAll,
	addProject,
	findById,
};

function getAll() {
	return db("projects");
}
function findById(id) {
	return db("projects").where({ id }).first();
}
function addProject(project) {
	return db("projects")
		.insert(project, "id")
		.then((ids) => {
			const [id] = ids;
			return findById(id);
		});
}
