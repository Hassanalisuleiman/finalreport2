// routes/addressees.js

const express = require('express');
const {
  createAddressee,
  getAllAddressees,
  getAddresseeById,
  updateAddressee,
  deleteAddressee,
} = require('../controllers/addresseesController');

const router = express.Router();

router.post('/addressees', createAddressee);
router.get('/addressees', getAllAddressees);
router.get('/addressees/:id', getAddresseeById);
router.put('/addressees/:id', updateAddressee);
router.delete('/addressees/:id', deleteAddressee);

module.exports = router;
