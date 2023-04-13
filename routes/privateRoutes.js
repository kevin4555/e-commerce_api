const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const isAdmin = require("../Middleware/isAdmin");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", isAdmin, adminController.index);
router.patch("/:id", isAdmin, adminController.update);
router.delete("/:id", isAdmin, adminController.destroy);
router.post("/tokens", adminController.token);

module.exports = router;
