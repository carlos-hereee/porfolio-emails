exports.up = function (knex) {
	return knex.schema.createTable("projects", (tbl) => {
		tbl.increments();
		tbl.string("title", 255).notNullable();
		tbl.string("subtitle", 255).notNullable();
		tbl.text("description").notNullable();
		tbl.string("website", 255).notNullable();
		tbl.string("github", 255).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("projects");
};
