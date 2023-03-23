require("dotenv").config();

async function runAllSeeders() {
  await require("./userSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
