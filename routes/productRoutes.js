const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
var { expressjwt: jwt } = require("express-jwt");

// Rutas relacionadas a los artículos:
// ...

router.get("/", productController.index);
router.get("/crear", productController.create);
router.post("/", productController.store);
router.get("/:id", productController.show);
router.get("/:id/editar", productController.edit);
router.patch(
  "/:id",
  /* jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }), */
  productController.update,
);
router.delete("/:id", productController.destroy);

module.exports = router;
