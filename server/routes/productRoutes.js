import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import { Product } from "../models/productModel.js";


router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (!products) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(products);
    }
  })
);

export default router;
