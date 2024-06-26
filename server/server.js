import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler,notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;
const connectMongo = async () => await connectDb();
connectMongo();

const app = express();

app.use(cors({origin: true}));

app.get('/',(req,res) => {
  res.send('API is running...');
})

app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes)
app.use(notFound);
app.use(errorHandler);
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
app.listen(port, () => console.log(`Server running on port ${port}`));
