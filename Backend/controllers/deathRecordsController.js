// controllers/deathRecordsController.js

const DeathRecord = require('../models/DeathRecord');

// Create a new death record
const createDeathRecord = async (req, res) => {
  try {
    const { corpse_name, date_of_death,causes_of_death, user_id } = req.body;
    const deathRecord = await DeathRecord.create({
      corpse_name,
      date_of_death,
      causes_of_death,
      user_id,

    });
    res.status(201).json(deathRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all death records
const getAllDeathRecords = async (req, res) => {
  try {
    const deathRecords = await DeathRecord.findAll();
    res.status(200).json(deathRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a death record by ID
const getDeathRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const deathRecord = await DeathRecord.findByPk(id);
    if (!deathRecord) {
      return res.status(404).json({ message: 'Death record not found' });
    }
    res.status(200).json(deathRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a death record
const updateDeathRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { corpse_name, date_of_death,causes_of_death, user_id } = req.body;
    const deathRecord = await DeathRecord.findByPk(id);
    if (!deathRecord) {
      return res.status(404).json({ message: 'Death record not found' });
    }
    await deathRecord.update({
      corpse_name,
      date_of_death,
      causes_of_death,
      user_id,
    });
    res.status(200).json(deathRecord);
  } catch (error) {
    res.status.json({ error: error.message });
  }
};

// Delete a death record
const deleteDeathRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deathRecord = await DeathRecord.findByPk(id);
    if (!deathRecord) {
      return res.status(404).json({ message: 'Death record not found' });
    }
    await deathRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDeathRecord,
  getAllDeathRecords,
  getDeathRecordById,
  updateDeathRecord,
  deleteDeathRecord,
};
