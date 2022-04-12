const express = require("express");
const products = require("./data/products");

const app = express();

let port = 5000;

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, console.log("Server running on port", port));