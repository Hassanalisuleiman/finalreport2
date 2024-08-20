const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
const GovernmentOrder = require('./GovernmentOrder');

const UserOrder = db.define('userorders', {
  userorder_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'governmentorders',
      key: 'order_id',
    },
  },
  received: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define associations
UserOrder.belongsTo(User, { foreignKey: 'user_id' });
UserOrder.belongsTo(GovernmentOrder, { foreignKey: 'order_id' });

User.hasMany(UserOrder, { foreignKey: 'user_id' });
GovernmentOrder.hasMany(UserOrder, { foreignKey: 'order_id' });

module.exports = UserOrder;
