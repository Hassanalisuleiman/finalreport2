// controllers/citizenController.js

const Citizen = require('../models/Citizen');

// Create a new citizen
const createCitizen = async (req, res) => {
  try {
    const { fname, lname, street, house_no, gender, phone_no, zan_id, tz_id,user_id} = req.body;
    const citizen = await Citizen.create({
      fname,
      lname,
      street,
      house_no,
      gender,
      phone_no,
      zan_id,
      tz_id,
      user_id,
      
      
    });
    res.status(201).json(citizen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all citizens
const getAllCitizens = async (req, res) => {
  try {
    const citizens = await Citizen.findAll();
    res.status(200).json(citizens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a citizen by ID
const getCitizenById = async (req, res) => {
  try {
    const { id } = req.params;
    const citizen = await Citizen.findByPk(id);
    if (!citizen) {
      return res.status(404).json({ message: 'Citizen not found' });
    }
    res.status(200).json(citizen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a citizen
const updateCitizen = async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname, street, house_no, gender, phone_no, zan_id, tz_id,user_id } = req.body;
    const citizen = await Citizen.findByPk(id);
    if (!citizen) {
      return res.status(404).json({ message: 'Citizen not found' });
    }
    await citizen.update({
      fname,
      lname,
      street,
      house_no,
      gender,
      phone_no,
      zan_id,
      tz_id,
      user_id,
      
    });
    res.status(200).json(citizen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a citizen
const deleteCitizen = async (req, res) => {
  try {
    const { id } = req.params;
    const citizen = await Citizen.findByPk(id);
    if (!citizen) {
      return res.status(404).json({ message: 'Citizen not found' });
    }
    await citizen.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCitizen,
  getAllCitizens,
  getCitizenById,
  updateCitizen,
  deleteCitizen,
};
