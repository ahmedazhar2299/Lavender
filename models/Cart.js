import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId : {
        type : String,
        require : true
    },
    products : {
        type : Array,
        default : []
    } 
  }
);

export default mongoose.model("Cart", CartSchema);
