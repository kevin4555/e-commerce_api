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

  products.push({
    title: "Maceta de Cerámica",
    description:
      "Esta maceta de cerámica es el complemento perfecto para darle un toque especial a tu hogar u oficina. Hecha a mano con materiales de alta calidad, esta maceta es resistente y duradera, ideal para plantas de interior o exterior. Con su diseño elegante y moderno, esta maceta es perfecta para cualquier decoración.",
    price: 10,
    img: { img1: "Ceramica_Maceta.jpg", img2: "Ceramica_Maceta2.jpg" },
    stock: 52,
    category: "Cerámica",
    slug: slugify("Maceta de Cerámica"),
  });

  products.push({
    title: "Pintura de Orca",
    description:
      "Esta pintura de orca es una obra de arte única y vibrante que seguramente llamará la atención de tus invitados. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la majestuosidad de las ballenas orcas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 30,
    img: { img1: "Pintura_Orca.avif", img2: "Pintura_Orca2.avif", img3: "Pintura_Orca3.webp" },
    stock: 2,
    category: "Pintura",
    slug: slugify("Pintura de Orca"),
  });

  products.push({
    title: "Pintura de una ballena",
    description:
      "Si eres un amante de la vida marina, esta pintura de ballena es perfecta para ti. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la belleza de las ballenas. Con su tamaño de 60x80 cm, esta pintura es el complemento ideal para cualquier habitación en tu hogar.",
    price: 60,
    img: {
      img1: "Pintura_Ballena.webp",
      img2: "Pintura_Ballena2.webp",
      img3: "Pintura_Ballena3.webp",
    },
    stock: 4,
    category: "Pintura",
    slug: slugify("Pintura de Ballena"),
  });

  products.push({
    title: "Pintura Beige Abstracta",
    description:
      "Esta pintura abstracta en tonos beige es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 250,
    img: { img1: "Pintura_Beige.avif", img2: "Pintura_Beige2.avif" },
    stock: 1,
    category: "Pintura",
    slug: slugify("Pintura beige abstracta"),
  });

  products.push({
    title: "Pintura en Blanco y Negro",
    description:
      "Si prefieres una decoración más minimalista, esta pintura en blanco y negro es perfecta para ti. Con su estilo clásico y elegante, esta pintura es una representación impresionante de la belleza de la simplicidad. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 300,
    img: {
      img1: "Pintura_BlancoyNegro.webp",
      img1: "Pintura_BlancoyNegro2.webp",
    },
    stock: 6,
    category: "Pintura",
    slug: slugify("Pintura blanco y negro"),
  });

  products.push({
    title: "Pintura de la casa de un Hobbit",
    description:
      "Si eres un fanático de la saga de El Señor de los Anillos, esta pintura de la casa de un hobbit es un artículo imprescindible para tu colección. Con su estilo detallado y su atención al detalle, esta pintura es una representación impresionante de la casa de Bilbo Bolsón en Hobbiton. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar.",
    price: 1000,
    img: { img1: "Pintura_Cabania.webp", img2: "Pintura_Cabania2.webp" },
    stock: 1,
    category: "Pintura",
    slug: slugify("Pintura casa hobbit"),
  });

  products.push({
    title: "Pintura de un hipopótamo",
    description:
      "Esta pintura de un hipopótamo es una obra de arte única y vibrante que seguramente llamará la atención de tus invitados. Con su uso magistral del color y su estilo realista, esta pintura es una representación impresionante de la fuerza y la belleza de los hipopótamos. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 46,
    img: {
      img1: "Pintura_Hipopotamo.webp",
      img2: "Pintura_hipopotamo2.webp",
    },
    stock: 14,
    category: "Pintura",
    slug: slugify("Pintura hipopotamo"),
  });

  products.push({
    title: "Pintura de Montaña Nevada",
    description:
      "Esta pintura de montaña nevada es una obra de arte impresionante que captura la belleza y la majestuosidad de los paisajes montañosos. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 230,
    img: { img1: "Pintura_Montania.webp", img2: "Pintura_Montania2.webp" },
    stock: 4,
    category: "Pintura",
    slug: slugify("Pintura de Montania"),
  });

  products.push({
    title: "Pintura de Olas",
    description:
      "Esta pintura de olas es una obra de arte única y vibrante que captura la energía y la emoción del océano. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la belleza de las olas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 25,
    img: { img1: "Pintura_Olas.webp", img2: "Pintura_Olas2.webp" },
    stock: 2,
    category: "Pintura",
    slug: slugify("Pintura de Orca"),
  });

  products.push({
    title: "Pintura de Perros",
    description:
      "Esta pintura de perros es una obra de arte tierna y emotiva que captura la belleza y la lealtad de los mejores amigos del hombre. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza y la personalidad de los perros. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
    price: 30,
    img: { img1: "Pintura_Perro.webp", img2: "Pintura_Perro2.webp", img3: "Pintura_Perro3.webp" },
    stock: 2,
    category: "Pintura",
    slug: slugify("Pintura de un Perro"),
  });

  products.push({
    title: "Pintura abstrácta cálida",
    description:
      "Esta pintura abstracta en tonos cálidos es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina y agregar un toque de calidez y color a tu espacio.",
    price: 340,
    img: { img1: "Pintura_Warm.avif", img2: "Pintura_warm2.avif" },
    stock: 2,
    category: "Pintura",
    slug: slugify("Pintura calida"),
  });

  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
