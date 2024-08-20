const express = require('express');
const router = express.Router();
const {
  createPrintedLetter,
  getPrintedLetters,
  getPrintedLetterById,
  updatePrintedLetter,
  deletePrintedLetter
} = require('../controllers/printedLetterController');

// Route to create a new printed letter
router.post('/letterss', createPrintedLetter);

// Route to get all printed letters
router.get('/letterss', getPrintedLetters);

// Route to get a single printed letter by ID
router.get('/letterss/:id', getPrintedLetterById);

// Route to update a printed letter by ID
router.put('/letterss/:id', updatePrintedLetter);

// Route to delete a printed letter by ID
router.delete('/letterss/:id', deletePrintedLetter);

module.exports = router;
