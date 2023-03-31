const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", adminController.index);
router.post("/tokens", adminController.token);

module.exports = router;
