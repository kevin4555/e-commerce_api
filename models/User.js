const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

async function hashPassword(user) {
  user.password = await bcrypt.hash(user.password, 12);
}

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
          validate: {
            notNull: { msg: "firstname is required" },
            notEmpty: true,
          },
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "lastname is required" },
            notEmpty: true,
          },
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
            notNull: { msg: "email is required" },
            notEmpty: true,
            isEmail: true,
          },
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "address is required" },
            notEmpty: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "password is required" },
            notEmpty: true,
          },
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "phone is required" },
            notEmpty: true,
          },
        },
        avatar: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );

    User.beforeCreate(async (user) => {
      await hashPassword(user);
    });

    User.beforeUpdate(async (user) => {
      if (user.changed("password")) {
        await hashPassword(user);
      }
    });

    User.beforeBulkCreate(async (users) => {
      for (let user of users) {
        await hashPassword(user);
      }
    });

    return User;
  }
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

module.exports = User;
