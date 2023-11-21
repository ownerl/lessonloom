const Course = require('../../models/course');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

module.exports = {
    create,
    show,
};

async function show(req, res) {
    const course = await Course.getCourse(req.params.courseId)
    console.log('click course: ', req.params.courseId)
    res.json(course)
}

async function create(req, res) {
    console.log('create on the way with req.body: ', req.body)
    try {
        const course = await Course.create(req.body)
        console.log('The course (req.body) contains this -> ', course)
        res.json(course)
    } catch (err) {
        res.status(400).json(err)
    }
}