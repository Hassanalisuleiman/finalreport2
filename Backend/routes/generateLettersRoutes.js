// src/routes/letterRoutes.js
const express = require('express');
const router = express.Router();
const letterController = require('../controllers/generateLettersController');

router.post('/generate', letterController.generateLetter);

module.exports = router;
