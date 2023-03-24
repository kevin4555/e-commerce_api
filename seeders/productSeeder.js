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

module.exports = async () => {
  const products = [
    {
      title: "Maceta de Cerámica",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 10,
      img: { img1: "Ceramica_Maceta.jpg", img2: "Ceramica_Maceta2.jpg" },
      stock: 52,
      categoryId: 2,
    },
    {
      title: "Pintura de Orca",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 30,
      img: { img1: "Pintura_Orca.avif", img2: "Pintura_Orca2.avif", img3: "Pintura_Orca3.webp" },
      stock: 2,
      categoryId: 1,
    },
    {
      title: "Pintura de una ballena",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 60,
      img: {
        img1: "Pintura_Ballena.webp",
        img2: "Pintura_Ballena2.webp",
        img3: "Pintura_Ballena3.webp",
      },
      stock: 4,
      categoryId: 1,
    },
    {
      title: "Pintura Beige Abstracta",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 250,
      img: { img1: "Pintura_Beige.avif", img2: "Pintura_Beige2.avif" },
      stock: 1,
      categoryId: 1,
    },
    {
      title: "Pintura en Blanco y Negro",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 300,
      img: {
        img1: "Pintura_BlancoyNegro.webp",
        img1: "Pintura_BlancoyNegro2.webp",
      },
      stock: 6,
      categoryId: 1,
    },
    {
      title: "Pintura de la casa de un Hobbit",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 1000,
      img: { img1: "Pintura_Cabania.webp", img2: "Pintura_Cabania2.webp" },
      stock: 1,
      categoryId: 1,
    },
    {
      title: "Pintura de un hipopótamo",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 46,
      img: {
        img1: "Pintura_Hipopotamo.webp",
        img2: "Pintura_hipopotamo2.webp",
      },
      stock: 14,
      categoryId: 1,
    },
    {
      title: "Pintura de Montaña Nevada",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 230,
      img: { img1: "Pintura_Montania.webp", img2: "Pintura_Montania2.webp" },
      stock: 4,
      categoryId: 1,
    },
    {
      title: "Pintura de Olas",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 25,
      img: { img1: "Pintura_Olas.webp", img2: "Pintura_Olas2.webp" },
      stock: 2,
      categoryId: 1,
    },
    {
      title: "Pintura de Perros",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 30,
      img: { img1: "Pintura_Perro.webp", img2: "Pintura_Perro2.webp", img3: "Pintura_Perro3.webp" },
      stock: 2,
      categoryId: 1,
    },
    {
      title: "Pintura abstrácta cálida",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 340,
      img: { img1: "Pintura_Warm.avif", img2: "Pintura_warm2.avif" },
      stock: 2,
      categoryId: 1,
    },
  ];
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
