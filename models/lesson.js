const mongoose = require("mongoose")
const Schema = mongoose.Schema

const lessonSchema = new Schema({
	title: {
		type: String,
		required: "A lesson title is required",
	},
	description: {
		type: String,
		required: "A lesson description is required",
	},
	youTubeLink: String,
	task: {
		type: String,
	},
	notes: {
		type: String,
	},
	courseId: {
		type: Schema.Types.ObjectId,
		ref: "Course",
	},
})

module.exports = {
	LessonModel: mongoose.model("Lesson", lessonSchema),
}
