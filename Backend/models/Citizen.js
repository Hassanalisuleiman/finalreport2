const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');

const Citizen = db.define('Citizen', {
  citizen_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'First name is required',
      },
    },
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Last name is required',
      },
    },
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  house_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zan_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tz_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // date_of_birth: {
  //   type: DataTypes.DATE,
  //   allowNull: true,
  // },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Associations
Citizen.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(Citizen, { foreignKey: 'user_id' });

module.exports = Citizen;
