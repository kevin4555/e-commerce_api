const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          set() {
            throw new Error("Do not try to set the id value!");
          },
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "title is required" },
            notEmpty: true,
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notNull: { msg: "description is required" },
            notEmpty: true,
          },
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            notNull: { msg: "price is required" },
            notEmpty: true,
          },
        },
        img: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "image is required" },
            notEmpty: true,
          },
        },
        stock: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            notNull: { msg: "stock is required" },
            notEmpty: true,
          },
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "category is required" },
            notEmpty: true,
          },
        },
        featured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        slug: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    return Product;
  }
}

module.exports = Product;
