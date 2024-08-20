// models/DeathRecord.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
// const Citizen = require('./Citizen');

const DeathRecord = db.define('deathrecords', {
  death_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  corpse_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Deceased name is required',
      },
    },
  },
  date_of_death: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Date of death is required',
      },
    },
  },
  causes_of_death: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Causes of death is required',
      },
    },
  },
  // citizen_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Citizen,
  //     key: 'id',
  //   },
  //   validate: {
  //     notEmpty: {
  //       msg: 'Citizen ID is required',
  //     },
  //   },
  // },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',  // Ensure the correct key is referenced
    }
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define the association
// DeathRecord.belongsTo(Citizen, { foreignKey: 'citizen_id' });
DeathRecord.belongsTo(User, { foreignKey: 'user_id' });

module.exports = DeathRecord;
