const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/check-token', usersController.checkToken);
// POST /api/users
router.post('/signup', usersController.create);
// POST /api/users/login
router.post('/login', usersController.login);

module.exports = router;