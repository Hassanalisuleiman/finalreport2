const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');

const ConflictRecord = db.define('conflictrecords', {
  conflict_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  characters: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Characters are required',
      },
    },
  },
  reasons: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Reasons are required',
      },
    },
  },
  solutions: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Solutions are required',
      },
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    }
  },
  status: {
    type: DataTypes.ENUM('Solved', 'Referred','Pending'),
    defaultValue: 'Pending', // Set default value to 'Solved'
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

ConflictRecord.belongsTo(User, { foreignKey: 'user_id' });

module.exports = ConflictRecord;
