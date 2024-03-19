import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/product.js";
import { Order } from "./models/orderModel.js";
import { Product } from "./models/productModel.js";
import { User } from "./models/userModel.js";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

// Function to import data
const importData = async () => {
  try {
    // Clear existing data
    await clearData();

    // Insert users into the database
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Add admin user to products
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    // Insert products into the database
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    handleFailure(error, "Data import failed!");
    process.exit(1);
  }
};
// Function to clear existing data
const clearData = async () => {
  await Order.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();
};

// Function to destroy data
const destroyData = async () => {
  try {
    await clearData();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    handleFailure(error, "Data destruction failed!");
    process.exit(1);
  }
};

// Handle error and exit process
const handleFailure = (error, message) => {
  console.error(`${message}: ${error.message}`.red.inverse);
  process.exit(1);
};

// Check command line arguments and execute appropriate action
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
