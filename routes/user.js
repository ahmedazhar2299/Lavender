import { Router } from "express";
import User from "../models/User.js";
const userRoute = Router();

userRoute.get("/", async (req, res) => {
  try {
    if (req.cookies.user)
    res.status(200).json(req.cookies.user);
    else
    res.status(404).json(null);
  } catch (err) {
    res.status(500).json(err);
  }
});
userRoute.post("/:id/setProfileImg", async (req, res) => {
    try {
        if(req.body.profilePicture && (req.params.id==req.body.id)){
            const currentUser = await User.findById(req.params.id);
            await currentUser.updateOne({ $set: { profilePicture: req.body.profilePicture } });
            res.status(200).json("Succesfully updated profile picture");
        }
        else{
            res.status(400).json("Unable to set profile picture");
        }
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

  userRoute.get("/:id/getProfileImg", async (req, res) => {
    try {
        if(req.params.id){
            const currentUser = await User.findById(req.params.id);
            res.status(200).json(currentUser.profilePicture);
        }
        else{
            res.status(400).json("Unable to get profile picture");
        }
      
    } catch (err) {
      res.status(500).json(err);
    }
  });



userRoute.post("/logout", async (req, res) => {
    try{
       res.clearCookie("user");
      res.status(200).json("Successfully logged out");
    }
    catch(err){
      res.status(500).json("Failed to logout");
    }
  });

export default userRoute;
