const { Admin } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Admin.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Admin Deleted" });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Otros handlers...
// ...

async function token(req, res) {
  try {
    let admin = await Admin.findOne({ where: { email: req.body.email } });
    if (!admin) {
      throw new Error();
    } else if (await admin.isValidPassword(req.body.password)) {
      admin = admin.dataValues;
      const token = jwt.sign({ email: admin.email, id: admin.id }, process.env.API_SECRET);
      delete admin.password;
      return res.status(200).json({
        token,
        ...admin,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Credenciales incorrectas" });
  }
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  token,
};
