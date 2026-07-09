const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const validateObjectId = require("../middleware/validateObjectId");

router.get("/", getProducts);
router.get("/:id", validateObjectId, getProduct);
router.post("/", createProduct);
router.put("/:id", validateObjectId, updateProduct);
router.delete("/:id", validateObjectId, deleteProduct);

module.exports = router;
