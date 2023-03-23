const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Category = require("./Category");
const Admin = require("./Admin");
const Product = require("./Product");
const Order = require("./Order");
const Review = require("./Review");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
Review.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Admin,
  Product,
  Category,
  Order,
  Review,
};
