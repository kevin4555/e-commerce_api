const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
var { expressjwt: jwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");
// Rutas relacionadas a los artículos:
// ...

router.get("/", productController.index);

router.post("/", isAdmin, productController.store);
router.get("/:slug", productController.show);

router.patch("/:id", isAdmin, productController.update);
router.delete("/:id", isAdmin, productController.destroy);
router.patch(
  "/:id",
  /* jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }), */
  productController.update,
);

module.exports = router;
