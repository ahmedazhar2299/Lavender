import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import cors from 'cors'
import authRoute from "./routes/auth.js";
import coookieparser from 'cookie-parser'
import userRoute from "./routes/User.js";
import bodyParser from "body-parser";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
const app = express();

const URI = `mongodb://localhost:27017/LavenderStore`;
mongoose
  .connect(URI)
  .then(console.log("DB connection successful"))
  .catch((err) => console.log(err));
  
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
app.use(coookieparser());

//middleware
app.use("/api/auth", authRoute);
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)
app.listen(process.env.DEFAULT_PORT, () => {
  console.log(`Server is running at port ${process.env.DEFAULT_PORT}`)
})
dotenv;