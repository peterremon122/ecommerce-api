const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  deleteItem,
} = require("../controllers/cart.controller");

const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getCart);

router.post("/", addToCart);

router.delete("/:id", validateObjectId, deleteItem);

module.exports = router;