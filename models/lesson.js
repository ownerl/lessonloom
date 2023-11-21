const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: {
        type: String,
        required: 'A lesson title is required'
    },
    description: {
        type: String,
        required: 'A lesson description is required'
    },
    youTubeLink: String,
    task: {

    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
})

lessonSchema.methods.getLesson = async function ( lessonId ) {
    const lesson = this.findById(lessonId);
    return lesson;
}

module.exports = {
    LessonModel: mongoose.model('Lesson', lessonSchema)
}