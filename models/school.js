const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the School model
const School = sequelize.define('School', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Name can not be null",
            },
            notEmpty: {
                msg: "Please enter your school name."
            },
            isValidType(value) {
                if (typeof value !== 'string') {
                    throw new Error("Name must be a valid string.");
                }
            },
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Address can not be null",
            },
            notEmpty: {
                msg: "Please enter your school address."
            },
            isValidType(value) {
                if (typeof value !== 'string') {
                    throw new Error("Address must be a valid string.");
                }
            },
        },
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Latitude cannot be null.",
            },
            isFloat: {
                msg: "Latitude must be a valid number."
            },
            isDecimal: {
                msg: "Latitude value must be in decimal",
            },
            isWithinRange(value) {
                if (value < -90 || value > 90) {
                    throw new Error("Latitude must be between -90 and 90.");
                }
            },
            isValidType(value) {
                if (typeof value !== 'number') {
                    throw new Error("Latitude must be a number, not a string or other type.");
                }
            },
        },
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Longitude can not be null.",
            },
            isFloat: {
                msg: "Longitude must be a valid number."
            },
            isDecimal: {
                msg: "Longitude value must be in decimal",
            },
            isWithinRange(value) {
                if (value < -180 || value > 180) {
                    throw new Error("Longitude must be between -180 and 180.");
                }
            },
            isValidType(value) {
                if (typeof value !== 'number') {
                    throw new Error("Longitude must be a number, not a string or other type.");
                }
            },
        },
    },
});

module.exports = School;
