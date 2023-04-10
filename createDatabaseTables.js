/**
 * Este archivo se encarga de crear todas las tablas del sistema.
 *
 * En caso de que las tablas ya existían, se eliminan y se crean
 * nuevamente.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node createDatabaseTables.js
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run tables
 *
 */

require("dotenv").config();
const db = require("./models");

async function createDatabaseTables() {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  await require("./seeders/categorySeeder")();
  await require("./seeders/userSeeder")();
  await require("./seeders/productSeeder")();
  await require("./seeders/adminSeeder")();
}

//createDatabaseTables();

module.exports = createDatabaseTables;
