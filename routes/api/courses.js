const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/api/courses');

router.get('/:courseId', courseController.show)

module.exports = router;