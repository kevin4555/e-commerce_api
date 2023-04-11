const { Category, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categories = await Category.findAll({ raw: true, nest: true });
    if (!categories) {
      throw new Error();
    }
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const category = await Category.findByPk(
      req.params.id,
      { include: Product },
      { raw: true, nest: true },
    );
    if (category) {
      return res.status(200).json(category);
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
async function store(req, res) {
  try {
    await Category.create({
      name: req.body.categoryName,
    });

    return res.status(201).json({ message: "Product Created" });
  } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    await Category.update(
      {
        name: req.body.categoryName,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return res.status(201).json({ message: "Product Updated" });
  } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Category Deleted" });
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
  create,
  store,
  edit,
  update,
  destroy,
};
