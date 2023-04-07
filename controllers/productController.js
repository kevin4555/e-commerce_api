const { Product, User, Review } = require("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();
    if (!products) {
      //Analizar
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
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: Review,
    });
    if (product) {
      return res.status(200).json(product);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  try {
    form.parse(req, async (err, fields, files) => {
      await Product.create({
        title: fields.title,
        description: fields.description,
        price: fields.price,
        img: { img1: files.img.newFilename },
        stock: fields.stock,
        featured: fields.featured,
        slug: fields.slug,
        rating: fields.rating,
        categoryId: fields.categoryId,
      });
    });
    return res.status(201).json({ message: "Product Created" });
  } catch (error) {
    return res.status(501).json({
      message: "Internal Server Error",
    });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });
  try {
    form.parse(req, async (err, fields, files) => {
      await Product.update(
        {
          title: fields.title,
          description: fields.description,
          price: fields.price,
          img: { img1: files.img.newFilename },
          stock: fields.stock,
          featured: fields.featured,
          slug: fields.slug,
          rating: fields.rating,
          categoryId: fields.categoryId,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      );
    });
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
    await Product.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Product Deleted" });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Reset database
async function reset(req, res) {
  try {
    await require("../createDatabaseTables")();
    await require("../seeders/categorySeeder")();
    await require("../seeders/userSeeder")();
    await require("../seeders/productSeeder")();
    await require("../seeders/adminSeeder")();
    return res.status(501).json({
      message: "Unable to reset database",
    });
  } catch (error) {
    return res.status(501).json({
      message: "Unable to reset database",
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
  reset,
};
