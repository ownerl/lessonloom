const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {   
        title: {
            type: String,
            required: 'A course title is required'
        },
        description: {
            type: String,
            required: 'A course description is required'
        },
        bannerImage: String,
        creatorId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        lessons: [{
            type: Schema.Types.ObjectId,
            ref: 'Lesson'
        }],
        categories: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }]
    }
)

courseSchema.methods.getCourse = async function ( courseId ) {
    const course = this.findById(courseId);
    return course;
}



module.exports = {
    CourseModel: mongoose.model('Course', courseSchema),
}