const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/api/users")
const validateGoogle = require("../../config/validateGoogle")

router.post("/login", validateGoogle, usersController.login)

router.post("/created", validateGoogle, usersController.courseCreated)

router.post("/saved", validateGoogle, usersController.courseSaved)

router.post("/coursesArray", validateGoogle, usersController.coursesArray)

module.exports = router
