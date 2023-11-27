const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  title: String,
  description: String,
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
})

module.exports = mongoose.model('Category', categorySchema)
