const { LessonModel } = require('../../models/lesson');

module.exports = {
    show,
    create,
};

async function show(req, res) {
    const lesson = await LessonModel.findById(req.params.lessonId)
    res.json(lesson)
}

async function create(req, res) {
    try {
        const newCourse = await LessonModel.create({
            title: req.body.title,
            description: req.body.description,
            youTubeLink: req.body.youTubeLink,
            task: req.body.task,
            notes: req.body.notes,
            courseId: req.body.courseId
        })
        res.json(newCourse)
    } catch (err) {
        res.status(400).json(err)
    }
}