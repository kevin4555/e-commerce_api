const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          set() {
            throw new Error("Do not try to set the id value!");
          },
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
        birthdate: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            notNull: { msg: "birthdate is required" },
            isDate: true,
          },
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    return User;
  }
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});
User.beforeUpdate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

User.beforeBulkCreate(async (users) => {
  users.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  });
});

module.exports = User;
