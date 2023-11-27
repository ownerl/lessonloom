const { CourseModel } = require('../../models/course')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

module.exports = {
  show,
  create,
  addLesson,
}

async function show(req, res) {
  const course = await CourseModel.findById(req.params.courseId)
  //console.log('click course: ', req.params.courseId)
  //console.log('this is the course res.json: ', course)
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
      categories: req.body.categories,
    })
    //console.log('The course (req.body) contains this -> ', newCourse)
    res.json(newCourse)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function addLesson(req, res) {
  //console.log('the req body of addLesson course controller: ', req.body._id)

  const filter = { _id: req.params.courseId}
  const update = {"$push": { "lessons": req.body }}
  const course = await CourseModel.findOneAndUpdate(filter, update, {
    new: true
  });
  //console.log('the returned res.json course: ', course)
  res.json(course)
  //course.lessons.push()
}