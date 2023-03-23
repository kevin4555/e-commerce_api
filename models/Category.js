const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          set() {
            throw new Error("Do not try to set the id value!");
          },
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: { msg: "name is required" },
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: "category",
      },
    );
    return Category;
  }
}

module.exports = Category;
