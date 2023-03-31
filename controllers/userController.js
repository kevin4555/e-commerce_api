const { User, Admin } = require("../models");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const { findOne, findByPk } = require("../models/User");
const { where } = require("sequelize");

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

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    try {
      await User.create({
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        phone: fields.phone,
        address: fields.address,
        password: fields.password,
        avatar: files.avatar.newFilename,
      });
      return res.status(200).json({ message: "User Created" });
    } catch (error) {
      return res.status(501).json(error);
    }
  });
}

// Show the form for editing the specified resource.

// Update the specified resource in storage.
async function update(req, res) {
  let user = await User.findOne({ where: { id: req.auth.id, email: req.auth.email } });
  let authuser = user && user.id === req.params.id;
  if (authuser || (await Admin.findOne({ where: { id: req.auth.id, email: req.auth.email } }))) {
    if (!authuser) {
      user = await User.findByPk(req.params.id);
    }
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      try {
        await User.create({
          firstname: fields.firstname,
          lastname: fields.lastname,
          email: fields.email,
          phone: fields.phone,
          address: fields.address,
          password: fields.password,
          avatar: files.avatar.newFilename,
        });
        return res.status(200).json({ message: "User Created" });
      } catch (error) {
        return res.status(501).json(error);
      }
    });
  } else {
    return res.status(401).json({ msg: "No tienes la Autorización" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await User.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "User Deleted" });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  token,
  update,
  destroy,
};
