// routes/disasterRecords.js

const express = require('express');
const {
  createDisasterRecord,
  getAllDisasterRecords,
  getDisasterRecordById,
  updateDisasterRecord,
  deleteDisasterRecord,
} = require('../controllers/disasterRecordsController');

const router = express.Router();

router.post('/disasterrecords', createDisasterRecord);
router.get('/disasterrecords', getAllDisasterRecords);
router.get('/disasterrecords/:id', getDisasterRecordById);
router.put('/disasterrecords/:id', updateDisasterRecord);
router.delete('/disasterrecords/:id', deleteDisasterRecord);

module.exports = router;
