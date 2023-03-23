const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  try {
    console.log(req.params.id);
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
  update,
  destroy,
};
