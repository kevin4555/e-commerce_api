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

const { Product } = require("../models");
const slugify = require("slugify");

module.exports = async () => {
  const products = [];

  for (let i = 0; i < 20; i++) {
    products.push({
      title: "Maceta de Cerámica",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 10,
      // image: faker.image.imageUrl(),
      stock: 10,
      category: "Cerámica",
      slug: slugify("Maceta de Cerámica"),
    });
  }

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Articles.");
};
