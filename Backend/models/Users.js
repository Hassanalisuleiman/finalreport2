const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Shehia = require('./Shehia');

const User = db.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Username is required',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password is required',
      },
    },
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'First name is required',
      },
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Last name is required',
      },
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Status is required',
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
  shehia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Shehia,
      key: 'shehia_id',
    }
  },
  role: {
    type: DataTypes.ENUM('admin', 'sheha', 'citizen'),
    allowNull: false,
    defaultValue: 'citizen',  // Set 'citizen' as the default role
    validate: {
      notEmpty: {
        msg: 'Role is required',
      },
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

User.belongsTo(Shehia, { foreignKey: 'shehia_id' });
Shehia.hasMany(User, { foreignKey: 'shehia_id' });





module.exports = User;
