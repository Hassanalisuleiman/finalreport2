// routes/landRecordRoutes.js

const express = require('express');
const {
  createLandRecord,
  getAllLandRecords,
  getLandRecordById,
  updateLandRecord,
  deleteLandRecord,
} = require('../controllers/LandRecordController');

const router = express.Router();

// Create a new land record
router.post('/landrecords', createLandRecord);

// Get all land records
router.get('/landrecords', getAllLandRecords);

// Get a land record by ID
router.get('/landrecords/:id', getLandRecordById);

// Update a land record
router.put('/landrecords/:id', updateLandRecord);

// Delete a land record
router.delete('/landrecords/:id', deleteLandRecord);

module.exports = router;
