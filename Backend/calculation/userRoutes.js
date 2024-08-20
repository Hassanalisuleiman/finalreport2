// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('./userController');

// Route to get all users with role 'citizen'
router.get('/api/citizens', userController.getCitizens);

// Route to get all users with role 'sheha'
router.get('/api/shehas', userController.getShehas);

// Route to get users by shehia_id
router.get('/users-by-shehia/:shehia_id', userController.getUsersByShehiaId);

module.exports = router;
