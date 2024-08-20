// controllers/addresseesController.js

const Addressee = require('../models/Addressee');

// Create a new addressee
const createAddressee = async (req, res) => {
  try {
    const { name, organization, country, date } = req.body;
    const addressee = await Addressee.create({
      name,
      organization,
      country,
      date,
    });
    res.status(201).json(addressee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all addressees
const getAllAddressees = async (req, res) => {
  try {
    const addressees = await Addressee.findAll();
    res.status(200).json(addressees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an addressee by ID
const getAddresseeById = async (req, res) => {
  try {
    const { id } = req.params;
    const addressee = await Addressee.findByPk(id);
    if (!addressee) {
      return res.status(404).json({ message: 'Addressee not found' });
    }
    res.status(200).json(addressee);
  } catch (error) {
    res.status500().json({ error: error.message });
  }
};

// Update an addressee
const updateAddressee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, organization, country, date } = req.body;
    const addressee = await Addressee.findByPk(id);
    if (!addressee) {
      return res.status(404).json({ message: 'Addressee not found' });
    }
    await addressee.update({
      name,
      organization,
      country,
      date,
    });
    res.status(200).json(addressee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an addressee
const deleteAddressee = async (req, res) => {
  try {
    const { id } = req.params;
    const addressee = await Addressee.findByPk(id);
    if (!addressee) {
      return res.status(404).json({ message: 'Addressee not found' });
    }
    await addressee.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAddressee,
  getAllAddressees,
  getAddresseeById,
  updateAddressee,
  deleteAddressee,
};
