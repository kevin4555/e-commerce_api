const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
var { expressjwt: jwt } = require("express-jwt");
const isAdmin = require("../Middleware/isAdmin");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get(
  "/",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.index,
);
router.post(
  "/",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.store,
);

router.patch(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.update,
);
router.delete(
  "/:id",
  jwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.destroy,
);
router.post("/tokens", adminController.token);

module.exports = router;
