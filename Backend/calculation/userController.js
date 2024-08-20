// controllers/userController.js

const { Op } = require('sequelize');
const User = require('../models/Users');
const shehia = require('../models/Shehia'); // Ensure this import is correct

// Controller function to get users by a list of shehia_ids
const getUsersByShehiaId = async (req, res) => {
  try {
    const { shehia_id } = req.params;

    // Fetch users where shehia_id matches the parameter
    const users = await User.findAll({
      where: {
        shehia_id: shehia_id
      }
    });

    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'No users found for the provided shehia_id' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};



const getCitizens = async (req, res) => {
  try {
    const citizens = await User.findAll({
      where: { role: 'citizen' }
    });
    res.status(200).json(citizens);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching citizens', error });
  }
};

const getShehas = async (req, res) => {
  try {
    const shehas = await User.findAll({
      where: { role: 'sheha' },
      include: [
        {
          model: shehia,
          attributes: ['shehia_id','shehia_name'], // Ensure that you fetch the shehia_name
        },
      ],
    });

    if (shehas.length > 0) {
      res.json(shehas);
    } else {
      res.status(404).json({ message: 'No shehas found' });
    }
  } catch (error) {
    console.error('Error fetching shehas:', error);
    res.status(500).json({ message: 'Error fetching shehas', error });
  }
};

module.exports = {
  getCitizens,
  getShehas,
  getUsersByShehiaId,
};
