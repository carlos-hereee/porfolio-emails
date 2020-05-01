exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("projects").insert([
				{
					id: 4,
					title: "SCHOOL CALENDAR",
					subtitle:
						"Backend project using Node.js and MySQL\nFrontend project using React",
					description:
						"Help School teacher and coaches coordinate with their students",
					website: "https://nervous-leakey-68fd24.netlify.com/",
					github:
						"https://github.com/Lambda-School-Labs/school-calendar-fe",
				},
				{
					id: 5,
					title: "AIR BNB",
					subtitle: "Backend project using Node.js and MySQL",
					description:
						"An app that uses past AirBnB datasets to determine the optimal pricing of an AirBnB unit based upon features such as geographic location, size, bedrooms, etc.",
					website: "https://frontend.surfsol.now.sh/",
					github:
						"https://github.com/AirBNBOptimalPrice/bnb-web-backend",
				},
				{
					id: 6,
					title: "DAD JOKES",
					subtitle: "Front end project using React",
					description:
						"You're a funny guy, but you keep losing your list of jokes and forgetting which ones had the best reactions! Well worry no more- Dad (or bad??) jokes app to the rescue.",
					website: "https://dadjokes-seven.now.sh/",
					github: "https://github.com/ch04937/dadjokes",
				},
			]);
		});
};
