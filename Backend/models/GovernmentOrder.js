const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users'); // Import the User model

const GovernmentOrder = db.define('governmentorders', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Order type is required',
      },
    },
  },
  order_description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Order description is required',
      },
    },
  },
  received: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // This is a reference to the User model
      key: 'user_id', // This is the column name of the referenced model
    },
    validate: {
      notEmpty: {
        msg: 'User ID is required',
      },
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define the association
GovernmentOrder.belongsTo(User, { foreignKey: 'user_id' });
module.exports = GovernmentOrder;
