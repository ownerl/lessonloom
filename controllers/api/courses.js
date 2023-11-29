const { CourseModel } = require('../../models/course')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

module.exports = {
  show,
  create,
  addLesson,
  all,
  update,
}

async function show(req, res) {
  const course = await CourseModel.findById(req.params.courseId).populate("lessons")
  //console.log('click course: ', req.params.courseId)
  //console.log('this is the course res.json: ', course)
  res.json(course)
}

async function create(req, res) {
  console.log('create on the way with req.body: ', req.body)
  try {
    console.log('inside try block')
    const newCourse = await CourseModel.create({
      title: req.body.formInfo.title,
      description: req.body.formInfo.description,
      bannerImage: req.body.formInfo.bannerImage,
      creatorId: req.body.user._id,
      categories: req.body.formInfo.categories,
    })
    console.log('The course (req.body) contains this -> ', newCourse)
    res.json(newCourse)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function addLesson(req, res) {
  //console.log('the req body of addLesson course controller: ', req.body._id)

  const filter = { _id: req.params.courseId }
  const update = { $push: { lessons: req.body } }
  const course = await CourseModel.findOneAndUpdate(filter, update, {
    new: true,
  })
  //console.log('the returned res.json course: ', course)
  res.json(course)
  //course.lessons.push()
}

async function all(req, res) {
  //console.log('this is a req body', req.body)
  // req.body contains filter parameters: sortBy and limitNumber which are passed from the jsx
  try {
    let courses = await CourseModel.find(req.body)
    res.json(courses)
    //console.log(courses)
  } catch (err) {
    console.log('Error encountered: ', err)
    res.status(400).json(err)
  }
}

async function update(req, res) {
  console.log('the req.body: ',req.body)
  try {
    const filter = { _id: req.params.courseId }
    const update = { title: req.body.title, description: req.body.description }
    const course = await CourseModel.findOneAndUpdate(filter, update, {
      new: true,
    })
    res.json(course)
  } catch(err) {
    res.status(400).json(err)
  }
}