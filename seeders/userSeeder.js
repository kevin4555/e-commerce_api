const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Lucía",
      lastname: "García",
      email: "lucia.garcia@gmail.com",
      password: "1234",
      address: "Calle del Sol 28",
      phone: "611385728",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Santiago",
      lastname: "Fernández",
      email: "santiago.fernandez@gmail.com",
      password: "1234",
      address: "Calle de la Paz 15",
      phone: "673842675",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Andrea",
      lastname: "Hernández",
      email: "andrea.hernandez@gmail.com",
      password: "1234",
      address: "Calle del Cid 3",
      phone: "611324568",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "David",
      lastname: "Pérez",
      email: "david.perez@gmail.com",
      password: "1234",
      address: "Calle de la Estrella 12",
      phone: "689345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Alicia",
      lastname: "González",
      email: "alicia.gonzalez@gmail.com",
      password: "1234",
      address: "Avenida de la Constitución 8",
      phone: "678567894",
      avatar: "Profile_defaultFemale.png",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
