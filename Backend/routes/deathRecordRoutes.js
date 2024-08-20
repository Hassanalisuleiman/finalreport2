// routes/deathRecords.js

const express = require('express');
const {
  createDeathRecord,
  getAllDeathRecords,
  getDeathRecordById,
  updateDeathRecord,
  deleteDeathRecord,
} = require('../controllers/deathRecordsController');

const router = express.Router();

router.post('/deathrecords', createDeathRecord);
router.get('/deathrecords', getAllDeathRecords);
router.get('/deathrecords/:id', getDeathRecordById);
router.put('/deathrecords/:id', updateDeathRecord);
router.delete('/deathrecords/:id', deleteDeathRecord);

module.exports = router;
