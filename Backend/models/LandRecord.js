// models/LandRecord.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users'); // Import the User model for association

const LandRecord = db.define('landrecords', {
  land_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  from_owner: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Form owner is required',
      },
    },
  },
  to_owner: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'To owner is required',
      },
    },
  },
  boundary_north: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Boundary north is required',
      },
    },
  },
  boundary_south: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Boundary south is required',
      },
    },
  },
  boundary_east: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Boundary east is required',
      },
    },
  },
  boundary_west: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Boundary west is required',
      },
    },
  },
  form_number: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Form number is required',
      },
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'User ID is required',
      },
    },
  },
  
},
{
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
}
);

// Define the association
LandRecord.belongsTo(User, { foreignKey: 'user_id' });

module.exports = LandRecord;
