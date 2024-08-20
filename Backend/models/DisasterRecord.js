// models/DisasterRecord.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
// const Citizen = require('./Citizen');

const DisasterRecord = db.define('disasterrecords', {
  disaster_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',  // Ensure the correct key is referenced
    }
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Cause is required',
      },
    },
  },
  effect: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Effect is required',
      },
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define the association
// DisasterRecord.belongsTo(Citizen, { foreignKey: 'citizen_id' });
DisasterRecord.belongsTo(User, { foreignKey: 'user_id' });

module.exports = DisasterRecord;
