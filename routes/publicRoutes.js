const express = require("express");
const router = express.Router();
const transporter = require("../transporter");

router.put("/reset", async (req, res) => {
  try {
    await require("../createDatabaseTables")();
    await require("../seeders/categorySeeder")();
    await require("../seeders/productSeeder")();
    await require("../seeders/adminSeeder")();
    await require("../seeders/userSeeder")();
    console.log("[Database] Reset Completado");
    return res.status(201).json({
      message: "Reset database",
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Unable to reset database",
    });
  }
});

router.post("/newsletter", async (req, res) => {
  try {
    let mailOptions = {
      from: `"Manos Creativas" <${process.env.EMAIL_USER}>`, // sender address
      to: req.body.email, // list of receivers
      subject: "Sobre Nosotros", // Subject line
      html: `<a href="https://manoscreativas.vercel.app/about-us">https://manoscreativas.vercel.app/about-us</a>
        `, // html body
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json("Enviado");
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
});

module.exports = router;
