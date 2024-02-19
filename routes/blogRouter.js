const express = require("express");
const blogController = require("./../controllers/blogController");
const { blogImageUploader } = require("./../utils/imageUploader");
const router = express.Router();

router.use(blogImageUploader);
router
	.route("/")
	.get(blogController.getAll)
	.post(blogController.create)
	.delete(blogController.deleteAll);
router
	.route("/:refId")
	.get(blogController.getOne)
	.patch(blogController.update)
	.delete(blogController.deleteOne);

module.exports = router;
