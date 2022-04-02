const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {
    checkPassword(pass) {
        return bcrypt.compareSync(pass, this.password);
      }
    }

    User.init(
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
          }
        },