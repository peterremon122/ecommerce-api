const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Get Cart
exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find().populate("product");

    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

// Add Item To Cart
exports.addToCart = async (req, res, next) => {
  try {
    const { product, quantity } = req.body;
    const exists = await Product.findById(product);

    if (!exists) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const item = await Cart.create({
      product,
      quantity,
    });

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

// Delete Item
exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.json({
      message: "Item removed from cart",
    });
  } catch (err) {
    next(err);
  }
};