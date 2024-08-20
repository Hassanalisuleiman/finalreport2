const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Shehia = sequelize.define('Shehia', {
    shehia_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    shehia_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'Shehia',
    timestamps: false,
});

// Shehia.hasMany(require('./Users'), { foreignKey: 'shehia_id' });

module.exports = Shehia;
