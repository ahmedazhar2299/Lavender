import { Router } from "express";
import Product from "../models/Product.js";
import User from "../models/User.js";
const productRoute = Router();

productRoute.get("/", async (req, res) => {
  try {
    const product = await Product.find()
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err);
  }
});


productRoute.get("/male", async (req, res) => {
  try {
    const product = await Product.find({
      "category" : "Male"
    })
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err);
  }
});


productRoute.get("/female", async (req, res) => {
  try {
    const product = await Product.find({
      "category" : "Female"
    })
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json(err);
  }
});

productRoute.get("/:id", async (req, res) => {
  try {
    if (req.params.id) {
      const product = await Product.findById(req.params.id)
      res.status(200).json(product)
    }
    else {
      res.status(400).json("No Product Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

productRoute.post("/add/:userID", async (req, res) => {
  try {
    if (
      req.body.title &&
      req.body.price &&
      req.body.category &&
      req.body.description &&
      req.body.productPicture
    ) {

      const user = await User.findById(req.params.userID);
      if (user && user.isAdmin === "true") {
        const oldProduct = await Product.find({ "title": req.body.title })
        if (oldProduct.length == 0) {
          const product = await new Product({
            title: req.body.title,
            price: parseFloat(req.body.price),
            category: req.body.category,
            description: req.body.description,
            profilePicture: req.body.productPicture
          });
          const newProduct = await new Product(product);
          newProduct.save();
          res.status(200).json("New product created Successfully");
        }
        else {
          res.status(400).json("Product Already Exist");
        }
      }
      else {
        res.status(400).json("Unauthorized Access");
      }

    } else {
      res.status(500).json("Failed to create a user");
    }
  } catch (err) {
    res.status(403).json(err);
  }
});

productRoute.post("/:productid/rate", async (req, res) => {
  try {
    if (req.body.name && req.body.description && req.body.rating && req.cookies.user._id) {
      const rating = {
        "userid": req.cookies.user._id,
        "name": req.body.name,
        "description": req.body.description,
        "rating" : req.body.rating
      }
      const currentProduct = await Product.findById(req.params.productid);
      await currentProduct.updateOne({
        $push: { rating: rating },
      });
      res.status(200).json("Succesfully added a rating");
    } else {
      res.status(400).json("Unable to set profile picture");
    }
  } catch (err) {
    res.status(500).json(err);
  }
})


productRoute.get("/:productid/reviews", async (req, res) => {
  try {
    if (req.params.productid && req.cookies.user._id) {
      const currentProduct = await Product.findById(req.params.productid);
      res.status(200).json(currentProduct.rating);
    } else {
      res.status(400).json("No Reviews Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
})



export default productRoute;
