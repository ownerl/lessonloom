const { CourseModel } = require('../../models/course')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

module.exports = {
  show,
  create,
}

async function show(req, res) {
  const course = await CourseModel.getCourse(req.params.courseId)
  console.log('click course: ', req.params.courseId)
  res.json(course)
}

async function create(req, res) {
  console.log('create on the way with req.body: ', req.body)
  try {
    console.log('inside try block')
    const newCourse = await CourseModel.create({
      title: req.body.title,
      description: req.body.description,
      bannerImage: req.body.bannerImage,
    })
    console.log('The course (req.body) contains this -> ', newCourse)
    res.json(newCourse)
  } catch (err) {
    res.status(400).json(err)
  }
}
