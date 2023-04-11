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
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
