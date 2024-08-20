// models/PrintedLetter.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users'); // Import the User model

const PrintedLetter = db.define('Printedletters', {
  letter_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  letterType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organizationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  poBox: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    defaultValue: 'Tanzania',
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
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  additionalName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});
PrintedLetter.belongsTo(User, { foreignKey: 'user_id' });

module.exports = PrintedLetter;
