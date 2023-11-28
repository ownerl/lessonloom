const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        googleId: String,
        email: String,
        picture: String,
        savedCourses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        createdCourses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
        educator: Boolean
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);