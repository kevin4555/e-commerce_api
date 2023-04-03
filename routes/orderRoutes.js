const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", orderController.index);
router.get("/crear", orderController.create);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.get("/:id/editar", orderController.edit);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
