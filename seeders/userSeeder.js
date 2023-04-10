/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 3000 artículos con textos ficticios.
 *
 * A priori, esta función debería ser ejecutada una única vez, al correr el
 * proyecto. Esto está hecho el archivo dbInitialSetup.js. Para evitar que se
 * corran los seeders se podría borrar o comentar dicha línea. Como alternativa
 * se podría escribir un código que permita ejectuar los seeders desde la
 * terminal.
 *
 */

const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];
  //const names = ["Female", "Male"];
  for (let i = 0; i < 20; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.address.streetAddress();
    const phone = faker.phone.number();
    const avatar = "Profile_defaultMale.png";

    users.push({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      address: address,
      phone: phone,
      avatar: avatar,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
