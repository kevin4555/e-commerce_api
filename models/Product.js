const { Model, DataTypes } = require("sequelize");
const slugify = require("slugify");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
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
          type: DataTypes.DECIMAL,
          allowNull: false,
          validate: {
            notNull: { msg: "price is required" },
            notEmpty: true,
          },
        },
        img: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: { msg: "image is required" },
            notEmpty: true,
          },
          defaultValue: "img",
        },
        stock: {
          type: DataTypes.TINYINT,
          allowNull: false,
          validate: {
            notNull: { msg: "stock is required" },
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
        rating: {
          type: DataTypes.TINYINT,
          validate: {
            min: 0,
            max: 5,
          },
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );
    Product.beforeCreate((product) => {
      product.slug = slugify(product.title);
    });

    Product.beforeBulkCreate((products) => {
      for (const product of products) {
        product.slug = slugify(product.title);
      }
    });
    return Product;
  }
}

module.exports = Product;
