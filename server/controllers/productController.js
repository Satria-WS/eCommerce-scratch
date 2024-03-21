import asyncHandler from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";


// @desc fetch all products
// @route Get /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc fetch all products
// @route Get /api/products/:id
// @access Public
export const getProductsById = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.json(products);
  }
});
