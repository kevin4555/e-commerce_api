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

const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Lucía",
      lastname: "García",
      email: "lucia.garcia@ejemplo.com",
      password: "iE1kXzj9",
      address: "Calle del Sol 28",
      phone: "611385728",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Santiago",
      lastname: "Fernández",
      email: "santiago.fernandez@ejemplo.com",
      password: "vC2bDmF5",
      address: "Calle de la Paz 15",
      phone: "673842675",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "María",
      lastname: "Martínez",
      email: "maria.martinez@ejemplo.com",
      password: "aB8nCmS7",
      address: "Avenida de la Libertad 5",
      phone: "612345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Adrián",
      lastname: "Gómez",
      email: "adrian.gomez@ejemplo.com",
      password: "qE3pVzT6",
      address: "Plaza Mayor 10",
      phone: "677483920",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Andrea",
      lastname: "Hernández",
      email: "andrea.hernandez@ejemplo.com",
      password: "tG5dRfA2",
      address: "Calle del Cid 3",
      phone: "611324568",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "David",
      lastname: "Pérez",
      email: "david.perez@ejemplo.com",
      password: "cF6bNpW8",
      address: "Calle de la Estrella 12",
      phone: "689345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Alicia",
      lastname: "González",
      email: "alicia.gonzalez@ejemplo.com",
      password: "xZ9qJmP3",
      address: "Avenida de la Constitución 8",
      phone: "678567894",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Jorge",
      lastname: "Rodríguez",
      email: "jorge.rodriguez@ejemplo.com",
      password: "lK2hSfG4",
      address: "Calle Mayor 20",
      phone: "634859273",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Ana",
      lastname: "Sánchez",
      email: "ana.sanchez@ejemplo.com",
      password: "uH3tBvZ5",
      address: "Calle de la Luna 14",
      phone: "654890124",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Carlos",
      lastname: "López",
      email: "carlos.lopez@ejemplo.com",
      password: "jR5mVcF8",
      address: "Calle del Sol 16",
      phone: "689078356",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Elena",
      lastname: "Giménez",
      email: "elena.gimenez@ejemplo.com",
      password: "fA6bVzC2",
      address: "Calle de la Playa 9",
      phone: "612345689",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "José",
      lastname: "Muñoz",
      email: "jose.munoz@ejemplo.com",
      password: "rD7kFtY9",
      address: "Avenida del Mar 23",
      phone: "677483923",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Laura",
      lastname: "Romero",
      email: "laura.romero@ejemplo.com",
      password: "vX4nGtQ2",
      address: "Calle de la Estación 6",
      phone: "611324579",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Juan",
      lastname: "Santos",
      email: "juan.santos@ejemplo.com",
      password: "hT9pBmZ7",
      address: "Calle del Pilar 2",
      phone: "689345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Marta",
      lastname: "Jiménez",
      email: "marta.jimenez@ejemplo.com",
      password: "sG8dRfE6",
      address: "Calle del Río 18",
      phone: "678567893",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Pedro",
      lastname: "Ruiz",
      email: "pedro.ruiz@ejemplo.com",
      password: "wQ2zJlP5",
      address: "Plaza de la Constitución 7",
      phone: "634859272",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Isabel",
      lastname: "Ortega",
      email: "isabel.ortega@ejemplo.com",
      password: "kH5tGcV9",
      address: "Calle de la Paz 12",
      phone: "654890123",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Fernando",
      lastname: "Vega",
      email: "fernando.vega@ejemplo.com",
      password: "mK4jDxR3",
      address: "Calle Mayor 35",
      phone: "689078358",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Cristina",
      lastname: "Moreno",
      email: "cristina.moreno@ejemplo.com",
      password: "nB1pVfZ8",
      address: "Calle del Sol 14",
      phone: "612345688",
      avatar: "Profile_defaultMale.png",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
