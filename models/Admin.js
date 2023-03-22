const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
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
          allowNull: false,
          validate: {
            notNull: { msg: "email is required" },
            notEmpty: true,
            isEmail: true,
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
      },
      {
        sequelize,
        modelName: "admin",
      },
    );
    return Admin;
  }
}

Admin.beforeCreate(async (admin) => {
  const hashedPassword = await bcrypt.hash(admin.password, 12);
  admin.password = hashedPassword;
});
Admin.beforeUpdate(async (admin) => {
  const hashedPassword = await bcrypt.hash(admin.password, 12);
  admin.password = hashedPassword;
});

Admin.beforeBulkCreate(async (admins) => {
  admins.map(async (admin) => {
    const hashedPassword = await bcrypt.hash(admin.password, 12);
    admin.password = hashedPassword;
  });
});

module.exports = Admin;
