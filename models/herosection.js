const mongoose = require("mongoose");

const heroSectionSchema = mongoose.Schema({
	sliderImages: [{ type: String }],
	content: String,
	title: String,
	buttonTexts: [String],
});

const HeroSection = new mongoose.model("HeroSection", heroSectionSchema);

module.exports = HeroSection;
