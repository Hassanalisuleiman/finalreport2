// controllers/birthRecordsController.js

const BirthRecord = require('../models/BirthRecord');

// Create a new birth record
const createBirthRecord = async (req, res) => {
  try {
    const {
      father_name,
      mother_name,
      child_name,
      date_of_birth,
      merit_status,
      user_id
    } = req.body;
    const birthRecord = await BirthRecord.create({
      father_name,
      mother_name,
      child_name,
      date_of_birth,
      merit_status,
      user_id
    });
    res.status(201).json(birthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all birth records
const getAllBirthRecords = async (req, res) => {
  try {
    const birthRecords = await BirthRecord.findAll();
    res.status(200).json(birthRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a birth record by ID
const getBirthRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const birthRecord = await BirthRecord.findByPk(id);
    if (!birthRecord) {
      return res.status(404).json({ message: 'Birth record not found' });
    }
    res.status(200).json(birthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a birth record
const updateBirthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      father_name,
      mother_name,
      child_name,
      date_of_birth,
      merit_status,
      user_id
    } = req.body;
    const birthRecord = await BirthRecord.findByPk(id);
    if (!birthRecord) {
      return res.status(404).json({ message: 'Birth record not found' });
    }
    await birthRecord.update({
      father_name,
      mother_name,
      child_name,
      date_of_birth,
      merit_status,
      user_id
    });
    res.status(200).json(birthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a birth record
const deleteBirthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const birthRecord = await BirthRecord.findByPk(id);
    if (!birthRecord) {
      return res.status(404).json({ message: 'Birth record not found' });
    }
    await birthRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBirthRecord,
  getAllBirthRecords,
  getBirthRecordById,
  updateBirthRecord,
  deleteBirthRecord,
};
