// controllers/disasterRecordsController.js

const DisasterRecord = require('../models/DisasterRecord');

// Create a new disaster record
const createDisasterRecord = async (req, res) => {
  try {
    const { user_id, cause, effect } = req.body;
    const disasterRecord = await DisasterRecord.create({
      user_id,
      cause,
      effect,
    });
    res.status(201).json(disasterRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all disaster records
const getAllDisasterRecords = async (req, res) => {
  try {
    const disasterRecords = await DisasterRecord.findAll();
    res.status(200).json(disasterRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a disaster record by ID
const getDisasterRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const disasterRecord = await DisasterRecord.findByPk(id);
    if (!disasterRecord) {
      return res.status(404).json({ message: 'Disaster record not found' });
    }
    res.status(200).json(disasterRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a disaster record
const updateDisasterRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, cause, effect } = req.body;
    const disasterRecord = await DisasterRecord.findByPk(id);
    if (!disasterRecord) {
      return res.status(404).json({ message: 'Disaster record not found' });
    }
    await disasterRecord.update({
      user_id,
      cause,
      effect,
    });
    res.status(200).json(disasterRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a disaster record
const deleteDisasterRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const disasterRecord = await DisasterRecord.findByPk(id);
    if (!disasterRecord) {
      return res.status(404).json({ message: 'Disaster record not found' });
    }
    await disasterRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDisasterRecord,
  getAllDisasterRecords,
  getDisasterRecordById,
  updateDisasterRecord,
  deleteDisasterRecord,
};
