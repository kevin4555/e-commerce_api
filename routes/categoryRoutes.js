const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", categoryController.index);
router.get("/crear", categoryController.create);
router.post("/", categoryController.store);
router.get("/:id", categoryController.show);
router.get("/:id/editar", categoryController.edit);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;
