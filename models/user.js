const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedCourseSchema = new Schema({
    courses: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
})

const createdCourseSchema = new Schema({
    courses: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
})

const userSchema = new Schema(
    {
        name: String,
        googleId: {
            type: String,
            required: true,
        },
        email: String,
        avatar: String,
        savedCourses: [savedCourseSchema],
        createdCourses: [createdCourseSchema],
        educator: Boolean
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);