const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
var { expressjwt: checkjwt } = require("express-jwt");

const isAdmin = require("../Middleware/isAdmin");

router.post("/tokens", userController.token);
router.post("/resetpassword", userController.sendMail);
router.put(
  "/resetpassword",
  checkjwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  userController.resetPassword,
);
router.get("/", userController.index);

router.post("/", userController.store);
router.get("/:id", userController.show);

router.patch(
  "/:id",
  checkjwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }),
  userController.update,
);
router.delete("/:id", isAdmin, userController.destroy);

module.exports = router;
