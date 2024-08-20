// controllers/landRecordController.js

const LandRecord = require('../models/LandRecord');

// Create a new land record
const createLandRecord = async (req, res) => {
  try {
    const {
      from_owner,
      to_owner,
      boundary_north,
      boundary_south,
      boundary_east,
      boundary_west,
      form_number,
      user_id
    } = req.body;
    const landRecord = await LandRecord.create({
      from_owner,
      to_owner,
      boundary_north,
      boundary_south,
      boundary_east,
      boundary_west,
      form_number,
      user_id
    });
    res.status(201).json(landRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all land records
const getAllLandRecords = async (req, res) => {
  try {
    const landRecords = await LandRecord.findAll();
    res.status(200).json(landRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a land record by ID
const getLandRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const landRecord = await LandRecord.findByPk(id);
    if (!landRecord) {
      return res.status(404).json({ message: 'Land record not found' });
    }
    res.status(200).json(landRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a land record
const updateLandRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      from_owner,
      to_owner,
      boundary_north,
      boundary_south,
      boundary_east,
      boundary_west,
      form_number,
      user_id
    } = req.body;
    const landRecord = await LandRecord.findByPk(id);
    if (!landRecord) {
      return res.status(404).json({ message: 'Land record not found' });
    }
    await landRecord.update({
      from_owner,
      to_owner,
      boundary_north,
      boundary_south,
      boundary_east,
      boundary_west,
      form_number,
      user_id
    });
    res.status(200).json(landRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a land record
const deleteLandRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const landRecord = await LandRecord.findByPk(id);
    if (!landRecord) {
      return res.status(404).json({ message: 'Land record not found' });
    }
    await landRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLandRecord,
  getAllLandRecords,
  getLandRecordById,
  updateLandRecord,
  deleteLandRecord,
};
