import asyncHandler from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export const getProductsById = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.json(products);
  }
});
