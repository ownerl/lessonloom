const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/api/courses');

router.post('/new', courseController.create)

router.get('/:courseId', courseController.show)


module.exports = router;