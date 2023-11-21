const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/api/courses');

router.post('/new', ()=> console.log('something happening in routes/api/courses'), courseController.create)

router.get('/:courseId', courseController.show)


module.exports = router;