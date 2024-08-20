// routes/birthRecordsRoutes.js

const express = require('express');
const {
  createBirthRecord,
  getAllBirthRecords,
  getBirthRecordById,
  updateBirthRecord,
  deleteBirthRecord,
} = require('../controllers/birthController');

const router = express.Router();

// Create a new birth record
router.post('/birthRecords', createBirthRecord);

// Get all birth records
router.get('/birthRecords', getAllBirthRecords);

// Get a birth record by ID
router.get('/birthRecords/:id', getBirthRecordById);

// Update a birth record
router.put('/birthRecords/:id', updateBirthRecord);

// Delete a birth record
router.delete('/birthRecords/:id', deleteBirthRecord);

module.exports = router;
