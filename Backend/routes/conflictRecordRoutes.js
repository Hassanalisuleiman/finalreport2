const express = require('express');
const {
  createConflictRecord,
  getAllConflictRecords,
  getConflictRecordById,
  updateConflictRecord,
  deleteConflictRecord,
} = require('../controllers/conflictRecordsController');

const router = express.Router();

router.post('/conflictrecords', createConflictRecord);
router.get('/conflictrecords', getAllConflictRecords);
router.get('/conflictrecords/:id', getConflictRecordById);
router.put('/conflictrecords/:id', updateConflictRecord);
router.delete('/conflictrecords/:id', deleteConflictRecord);

module.exports = router;
