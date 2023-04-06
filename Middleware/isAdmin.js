const { Admin } = require("../models");

async function isAdmin(req, res, next) {
  const admin = Admin.findOne({ where: { email: req.auth.email } });
  if (admin) {
    // req.auth.email debería ser un email existente entre admins
    next(); // Si existe, lo dejo pasar...
  } else {
    res.status(401).json({ msg: "Non authorized" }); // Sino, le tiro un error...
  }
}

module.exports = isAdmin;
