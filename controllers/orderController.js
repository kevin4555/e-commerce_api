const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll({ raw: true, nest: true });
    if (!orders) {
      throw new Error();
    }
    return res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { cart, userId } = req.body;
  /*   try { */
  await Order.create({
    status: "Procesando",
    address: { a: "a" },
    products: { items: [...cart.items] },
    totalPrice: cart.totalPrice,
    userId,
  });
  return res.status(201).json({ message: "Order Created" });
  /*   } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  } */
}

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
