const PrintedLetter = require('../models/PrintedLetter');
const User = require('../models/Users'); // Import the User model

// Create a new printed letter
const createPrintedLetter = async (req, res) => {
  try {
    const printedLetter = await PrintedLetter.create(req.body);
    res.status(201).json(printedLetter);
  } catch (error) {
    res.status(500).json({ message: 'Error creating printed letter', error });
  }
};

// Get all printed letters with user details
const getPrintedLetters = async (req, res) => {
  try {
    const printedLetters = await PrintedLetter.findAll({
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'phone_no', 'house_no'], // Include user details
      }],
    });
    res.status(200).json(printedLetters);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching printed letters', error });
  }
};

// Get a single printed letter by ID with user details
const getPrintedLetterById = async (req, res) => {
  try {
    const printedLetter = await PrintedLetter.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'phone_no', 'house_no'], // Include user details
      }],
    });
    if (!printedLetter) {
      return res.status(404).json({ message: 'Printed letter not found' });
    }
    res.status(200).json(printedLetter);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching printed letter', error });
  }
};

// Update a printed letter
const updatePrintedLetter = async (req, res) => {
  try {
    const [updated] = await PrintedLetter.update(req.body, {
      where: { letter_id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Printed letter not found' });
    }
    const updatedPrintedLetter = await PrintedLetter.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'phone_no', 'house_no'], // Include user details
      }],
    });
    res.status(200).json(updatedPrintedLetter);
  } catch (error) {
    res.status(500).json({ message: 'Error updating printed letter', error });
  }
};

// Delete a printed letter
const deletePrintedLetter = async (req, res) => {
  try {
    const deleted = await PrintedLetter.destroy({
      where: { letter_id: req.params.id } // Use the correct column name
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Printed letter not found' });
    }
    res.status(200).json({ message: 'Printed letter deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting printed letter', error });
  }
};

module.exports = {
  createPrintedLetter,
  getPrintedLetters,
  getPrintedLetterById,
  updatePrintedLetter,
  deletePrintedLetter
};
