const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", categoryController.index);
router.get("/crear", isAdmin, categoryController.create);
router.post("/", isAdmin, categoryController.store);
router.get("/:id", categoryController.show);
router.get("/:id/editar", isAdmin, categoryController.edit);
router.patch("/:id", isAdmin, categoryController.update);
router.delete("/:id", isAdmin, categoryController.destroy);

module.exports = router;
