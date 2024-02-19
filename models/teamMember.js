const mongoose = require("mongoose");

const teamMemberSchema = mongoose.Schema({
	names: {
		type: String,
		trim: true,
		unique: [true, "account already exists"],
	},
	image: String,
	description: String,
});

const TeamMember = new mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;
