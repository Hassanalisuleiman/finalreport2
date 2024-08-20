// models/BirthRecord.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
// const Citizen = require('./Citizen');

const BirthRecord = db.define('birthrecord', {
  birth_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Father name is required',
      },
    },
  },
  mother_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Mother name is required',
      },
    },
  },
  child_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Child name is required',
      },
    },
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Date of birth is required',
      },
    },
  },
  merit_status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Merit status is required',
      },
    },
  },
  // citizen_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Citizen,
  //     key: 'citizen_id',
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
  
},
{
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
}
);

// Define the association
BirthRecord.belongsTo(User, { foreignKey: 'user_id' });
// BirthRecord.belongsTo(Citizen, { foreignKey: 'citizen_id' });
// Citizen.hasMany(BirthRecord, { foreignKey: 'citizen_id' });

module.exports = BirthRecord;
