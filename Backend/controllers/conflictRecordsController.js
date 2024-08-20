const ConflictRecord = require('../models/ConflictRecord');

const createConflictRecord = async (req, res) => {
  try {
    const { characters, reasons, solutions, user_id, status } = req.body;
    const conflictRecord = await ConflictRecord.create({
      characters,
      reasons,
      solutions,
      user_id,
      status, // Include status in creation
    });
    res.status(201).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllConflictRecords = async (req, res) => {
  try {
    const conflictRecords = await ConflictRecord.findAll();
    res.status(200).json(conflictRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConflictRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    res.status(200).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateConflictRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { characters, reasons, solutions, user_id, status } = req.body;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    await conflictRecord.update({
      characters,
      reasons,
      solutions,
      user_id,
      status, // Update the status field
    });
    res.status(200).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConflictRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    await conflictRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConflictRecord,
  getAllConflictRecords,
  getConflictRecordById,
  updateConflictRecord,
  deleteConflictRecord,
};
