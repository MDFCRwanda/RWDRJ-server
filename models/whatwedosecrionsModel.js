const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
	title: {
		type: String,
		trim: true,
	},
	content: [
		{
			type: String,
			trim: true,
		},
	],
	coverImage: {
		type: String,
		trim: true,
	},
	gallery: [
		{
			type: string,
		},
	],
});

const Section = new mongoose.model(sectionSchema);

module.exports = Section;
