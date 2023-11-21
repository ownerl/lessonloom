const express = require('express');
const router = express.Router();
const lessonController = require('../../controllers/api/lessons');

router.post('/new', lessonController.create)

router.get('/:lessonId', lessonController.show)


module.exports = router;