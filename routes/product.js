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

productRoute.get("/:id", async (req, res) => {
    try {
      if(req.params.id){
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
      }
      else{
        res.status(400).json("No Product Found");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

productRoute.post("/add/:userID", async (req, res) => {
  if (
    req.body.title &&
    req.body.price &&
    req.body.category &&
    req.body.description &&
    req.body.productPicture
  ) {
    try {
      const user = await User.findById(req.params.userID);
        if (user && user.isAdmin === "true") {
        const oldProduct = await Product.find({"title" : req.body.title})
        if(oldProduct.length == 0){
            const product = await new Product({
                title: req.body.title,
                price: parseFloat(req.body.price),
                category: req.body.category,
                description: req.body.description,
                productPicture : req.body.productPicture
              });
            const newProduct = await new Product(product);
            newProduct.save();
            res.status(200).json("New product created Successfully");
        }
        else{
            res.status(400).json("Product Already Exist");
        }
        }
        else{
            res.status(400).json("Unauthorized Access");
        }
    } catch (err) {
      res.status(403).json(err);
    }
  } else {
    res.status(500).json("Failed to create a user");
  }
});

 productRoute.post("/:productid/rate", async (req, res) => {
  try {
    if (req.body.name && req.body.description && req.cookies.user._id) {
      const rating = {
        "userid" : req.cookies.user._id,
        "name"  : req.body.name,
        "description" : req.body.description
      }
      const currentProduct = await Product.findById(req.params.productid);
      await currentProduct.updateOne({
        $push: { rating: rating  },
      });
      res.status(200).json("Succesfully added a rating");
    } else {
      res.status(400).json("Unable to set profile picture");
    }
  } catch (err) {
    res.status(500).json(err);
  }
 })

// productRoute.post("/:id/setProductImg", async (req, res) => {
//   try {
//     if (req.body.profilePicture && req.cookies.user._id == req.params.id) {
//       const currentProduct = await Product.findById(req.params.id);
//       await currentUser.updateOne({
//         $set: { profilePicture: req.body.profilePicture },
//       });
//       res.status(200).json("Succesfully updated profile picture");
//     } else {
//       res.status(400).json("Unable to set profile picture");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

export default productRoute;
