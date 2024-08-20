// routes/citizenRoutes.js

const express = require('express');
const {
  createCitizen,
  getAllCitizens,
  getCitizenById,
  updateCitizen,
  deleteCitizen,
} = require('../controllers/citizenController');

const router = express.Router();

// Create a new citizen
router.post('/citizens', createCitizen);

// Get all citizens
router.get('/citizens', getAllCitizens);

// Get a citizen by ID
router.get('/citizens/:id', getCitizenById);

// Update a citizen
router.put('/citizens/:id', updateCitizen);

// Delete a citizen
router.delete('/citizens/:id', deleteCitizen);

module.exports = router;
