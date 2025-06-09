const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register new user
router.post('/create-user', authController.createUser);

// Login and receive JWT token
router.post('/login-user', authController.loginUser);

// Validate JWT token
router.get('/validate-user', authMiddleware, authController.validateUser);

module.exports = router;
