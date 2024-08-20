const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./Users');

const Sheha = sequelize.define('Sheha', {
    sheha_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shehia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users', // Ensure this matches your actual Users table name
            key: 'user_id'
        }
    }
}, {
    tableName: 'sheha',
    timestamps: false
});
Sheha.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Sheha;
