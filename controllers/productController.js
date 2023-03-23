const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll({ raw: true, nest: true });
    if (!products) {
      throw new Error();
    }
    return res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findByPk(req.params.id, { raw: true, nest: true });
    if (product) {
      return res.status(200).json(product);
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
