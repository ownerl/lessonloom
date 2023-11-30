const { CourseModel } = require('../../models/course')

module.exports = {
  show,
  create,
  addLesson,
  all,
  update,
}

async function show(req, res) {
  const course = await CourseModel.findById(req.params.courseId).populate("lessons")
  res.json(course)
}

async function create(req, res) {
  try {
    const newCourse = await CourseModel.create({
      title: req.body.formInfo.title,
      description: req.body.formInfo.description,
      bannerImage: req.body.formInfo.bannerImage,
      creatorId: req.body.user._id,
      categories: req.body.formInfo.categories,
    })
    res.json(newCourse)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function addLesson(req, res) {

  const filter = { _id: req.params.courseId }
  const update = { $push: { lessons: req.body } }
  const course = await CourseModel.findOneAndUpdate(filter, update, {
    new: true,
  })
  res.json(course)
}

async function all(req, res) {
  try {
    let courses = await CourseModel.find(req.body)
    res.json(courses)
  } catch (err) {
    console.log('Error encountered: ', err)
    res.status(400).json(err)
  }
}

async function update(req, res) {
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
