import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const authRoute = Router();

authRoute.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({ email: req.body.email });
    if (!user) res.status(404).json("User not found");
    else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) res.status(400).json("Invalid Password entered");
      else {

        const { password, profilePicture, ...remaining } = user._doc;
        res.cookie("user", remaining)
        res.status(200).json(remaining);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

authRoute.post("/register", async (req, res) => {
  if (req.body.username && req.body.email && req.body.password) {
    const oldUser = await User.findOne({
      "email": req.body.email
    })
    if (!oldUser) {
      //encrypt password
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      try {
        const newuser = await new User(user);
        newuser.save();
        res.status(200).json("New user created Successfully");
      } catch (err) {
        res.status(403).json(err);
      }
    }
    else {
    res.status(403).json("User Already Exist");
    }



  } else {
    res.status(500).json("Failed to create a user");
  }
});





export default authRoute;
