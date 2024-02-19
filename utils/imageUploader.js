//jshint esversion:9
const cloudinary = require("cloudinary");
const asyncHandler = require("./asyncHandler");

exports.blogImageUploader = asyncHandler(async (req, res, next) => {
	let galleryPromises = [];
	let coverImagePromises = [];
	let inContentImagePromisses = [];
	let gallery = [req.body.gallery];
	let coverImage = [req.body.coverImage];
	let inContentImages = [req.body.inContentImages];
	if (req.body.gallery || req.body.coverImage || req.body.inContentImages) {
		if (req.body.gallery) {
			galleryPromises = gallery.map((gallImage) => {
				return cloudinary.v2.uploader.upload(
					gallImage.img,
					{
						folder: "RWDRJ-blog-images",
						asset_id: req.body.title + "-images",
					},
					function (error, result) {
						console.log(error);
					}
				);
			});
			gallery = await Promise.all(galleryPromises);
			gallery = gallery.map((gallImag) => gallImag.secure_url);
			req.body.gallery = {
				link: profileImage[0],
				alt: gallImage.alt,
				status: "public",
			};
		}
		if (req.body.coverImage) {
			coverImagePromises = coverImage.map((covImag) => {
				return cloudinary.v2.uploader.upload(
					covImag,
					{
						folder: "RWDRJ-blog-images",
						asset_id: req.body.title + "-cover",
					},
					function (error, result) {
						console.log(error);
					}
				);
			});
			coverImage = await Promise.all(coverImagePromises);
			coverImage = coverImage.map((covImag) => covImag.secure_url);
			req.body.coverImage = coverImage[0];
		}
		if (req.body.inContentImages) {
			inContentImagePromisses = req.body.inContentImages.map((image) => {
				return cloudinary.v2.uploader.upload(
					image,
					{
						folder: "RWDRJ-blog-images",
						asset_id: req.body.name,
					},
					function (error, result) {
						console.log(error);
					}
				);
			});
			inContentImages = await Promise.all(inContentImagePromisses);
			inContentImages = inContentImages.map((image) => image.secure_url);
			req.body.inContentImages = inContentImages;
		}
		console.log("IMAGE UPLOADER ......");

		return next();
	} else {
		console.log("NO IMAGES ON BODY ......");
		return next();
	}
});
