/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const reviewRoutes = require("./reviewRoutes");

//const commentRoutes = require("./commentRoutes");

/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyento
 * una API esta alternativa no tendría sentido.
 */

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */
  app.get("/", (req, res) => {
    res.send("Working");
  });
  app.put("/reset", async (req, res) => {
    console.log("entro /reset");
    try {
      await require("../createDatabaseTables")();
      /*  await require("../seeders/categorySeeder")(); */
      await require("../seeders/userSeeder")();
      /* await require("../seeders/productSeeder")();
      await require("../seeders/adminSeeder")(); */
      console.log("[Database] Reset Completado");
      return res.status(201).json({
        message: "Reset database",
      });
    } catch (error) {
      console.log(error);
      return res.status(501).json({
        message: "Unable to reset database",
      });
    }
  });

  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/orders", orderRoutes);
  app.use("/reviews", reviewRoutes);

  app.use("/", publicRoutes);
  app.use("/admin", privateRoutes);
};
