require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "E-Commerce API Running...",
  });
});

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});