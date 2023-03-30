const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
var { expressjwt: jwt } = require("express-jwt");

// Rutas relacionadas a los artículos:
// ...

router.get("/", productController.index);

router.post("/", productController.store);
router.get("/:id", productController.show);

router.patch("/:id", productController.update);
router.delete("/:id", productController.destroy);
router.patch(
  "/:id",
  /* jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }), */
  productController.update,
);

module.exports = router;
