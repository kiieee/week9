const {DataTypes} = require("sequelize");
const SQLconnection = require("../connection");

const User = SQLconnection.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        },
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
    }
})

module.exports = User;