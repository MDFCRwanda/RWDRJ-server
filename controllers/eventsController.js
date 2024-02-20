const Event = require("../models/event");
const asyncHandler = require("../utils/asyncHandler");
const crypto = require("crypto");
exports.getAll = asyncHandler(async (req, res) => {
	const events = await Event.find();

	return res.status(200).json({
		status: "success",
		data: blogs,
		length: events.length,
	});
});
exports.getOne = asyncHandler(async (req, res) => {
	const { refId } = req.params;
	const event = await Event.findOne({ refId });

	return res.status(200).json({
		status: "Success",
		data: event,
	});
});
exports.create = asyncHandler(async (req, res) => {
	const {
		title,
		description,
		coverImage,
		gallery,
		datestart,
		dateend,
		postedBy,
	} = req.body;
	if (!title || !content) {
		return res.status(400).json({
			status: "Bad request",
			message: "title and content are required",
		});
	}
	const newEvent = await Blog.create({
		refId: crypto.randomUUID(),
		title,
		datePosted: new Date(),
		coverImage,
		description,
		datestart: new Date(datestart),
		dateend: new Date(dateend),
		gallery,
		postedBy,
	});

	if (newBlog) {
		await Event.findByIdAndUpdate(newEvent._id, {
			link: `${process.env.serverURL + "\blogs" + newBlog.refId}}`,
		});
	}
	return res.status(201).json({
		status: "Success",
		data: newEvent,
		message: "success",
	});
});

exports.update = asyncHandler(async (req, res) => {
	const { refId } = req.params;

	const {
		title,
		datePosted,
		coverImage,
		description,
		datestart,
		dateend,
		gallery,
		postedBy,
	} = req.body;
	const blog = await Blog.findOneAndUpdate(
		{ refId },
		{ title, content, coverImage, contentImages, gallery }
	);
	return res.status(203).json({
		status: "Success",
		data: blog,
	});
});

exports.deleteOne = asyncHandler(async (req, res) => {
	const { refId } = req.params;

	const blog = await Blog.findOne({ refId });

	return res.status(200).json({
		status: "Success",
		message: "blog deleted successfully !!!",
	});
});

exports.deleteAll = asyncHandler(async (req, res) => {
	await Blog.deleteMany();
	return res.status(204).json({
		status: "Success",
		message: "All blogs deleted !!!",
	});
});
