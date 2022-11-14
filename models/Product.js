import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      max : 100,
      require: true,
      unique : true
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
        type: String,
        max: 500,
        require: true
    },
    profilePicture: {
        type: String,
        require : true
    },
    rating : {
        type : Array,
        default : []
    }
  }
);

export default mongoose.model("Product", ProductSchema);
