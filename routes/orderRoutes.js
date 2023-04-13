const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", orderController.index);
router.get("/crear", orderController.create);
router.post("/", orderController.store);
router.get("/:id", orderController.show);
router.get("/:id/editar", isAdmin, orderController.edit);
router.patch("/:id", isAdmin, orderController.update);
router.delete("/:id", isAdmin, orderController.destroy);

module.exports = router;
