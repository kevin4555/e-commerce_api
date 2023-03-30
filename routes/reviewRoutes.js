const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Rutas relacionadas a los artículos:
// ...

router.get("/", reviewController.index);
router.get("/crear", reviewController.create);
router.post("/", reviewController.store);
router.get("/:id", reviewController.show);
router.get("/:id/editar", reviewController.edit);
router.patch("/:id", reviewController.update);
router.delete("/:id", reviewController.destroy);

module.exports = router;
