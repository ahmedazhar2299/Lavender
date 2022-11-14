import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 5,
      max: 25,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    isAdmin : {
      type : String,
      default : "false"
    },
    profilePicture: {
        type: String
    }
  }
);

export default mongoose.model("User", UserSchema);
