const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.findAll({ raw: true, nest: true });
    if (!users) {
      throw new Error();
    }
    for (const user of users) {
      delete user.password;
    }
    return res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function token(req, res) {
  try {
    let user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      throw new Error();
    } else if (await user.isValidPassword(req.body.password)) {
      user = user.dataValues;
      const token = jwt.sign({ email: user.email, id: user.id }, process.env.API_SECRET);
      delete user.password;
      return res.status(200).json({
        token,
        ...user,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Credenciales incorrectas" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const user = await User.findByPk(req.params.id, { raw: true, nest: true });
    if (user) {
      delete user.password;
      return res.status(200).json(user);
    } else {
      throw new Error();
    }
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  token,
  update,
  destroy,
};
