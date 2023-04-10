const { User, Admin } = require("../models");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const { findOne, findByPk } = require("../models/User");
const { where } = require("sequelize");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { log } = require("console");
const transporter = require("./../transporter");

//supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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
      const token = jwt.sign({ email: user.email, id: user.id }, process.env.API_SECRET);
      return res.status(200).json({
        token,
        user,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    return res.status(404).json({ message: "Credenciales incorrectas" });
  }
}

async function sendMail(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      throw new Error("Not Found");
    }
    const token = jwt.sign({ email: user.email, id: user.id }, process.env.API_SECRET);
    let link = `${process.env.APP_DOMAIN}/resetpassword/${token}`;
    let mailOptions = {
      from: `"Manos Creativas" <${process.env.EMAIL_USER}>`, // sender address
      to: user.email, // list of receivers
      subject: "Restablecer Contraseña", // Subject line
      html: `
      <b>Por favor haz clic en el siguiente enlace para elegir una nueva contraseña:</b><br>
      <a href="${link}">${link}</a>
      `, // html body
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json("Enviado");
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
}

async function resetPassword(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.auth.email, id: req.auth.id } });
    if (!user) {
      throw new Error("Not Found");
    }
    await user.update({ password: req.body.password });
    const token = jwt.sign({ email: user.email, id: user.id }, process.env.API_SECRET);
    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const user = await User.findByPk(req.params.id, { raw: true, nest: true });
    if (user) {
      return res.status(200).json(user);
    } else {
      throw new Error("Not Found");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    try {
      const ext = path.extname(files.avatar.filepath);
      const newFileName = `profile_${uuidv4()}${ext}`;
      const user = await User.create({
        firstname: fields.firstname,
        lastname: fields.lastname,
        email: fields.email,
        phone: fields.phone,
        address: fields.address,
        password: fields.password,
        avatar: newFileName,
      });
      const { data, error } = await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.avatar.mimetype,
          duplex: "half",
        });
      const token = jwt.sign({ email: user.email, id: user.id }, process.env.API_SECRET);
      return res.status(200).json({
        token,
        user,
      });
    } catch (error) {
      //Analizar error imagen o user
      console.log(error);
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
  sendMail,
  resetPassword,
  token,
  update,
  destroy,
};
