const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
var { expressjwt: checkjwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");

router.get("/", reviewController.index);
router.post(
  "/",
  checkjwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  reviewController.store,
);
router.get("/:id", reviewController.show);
router.patch("/:id", isAdmin, reviewController.update);
router.delete("/:id", isAdmin, reviewController.destroy);

module.exports = router;
