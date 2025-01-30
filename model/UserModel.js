const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require("../database/db")

// Define User model with explicit table name and disabling timestamps
const User = sequelize.define('Tests', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Tests',  // Explicitly specifying the table name
});



module.exports = User;