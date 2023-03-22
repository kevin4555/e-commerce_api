const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birthdate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
}

module.exports = User;
