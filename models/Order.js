import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId : {
        type : String,
        require : true
    },
    orderData : {
        type : Array,
        default : []
    },
    address  : {
      type : Object,
        default : {}
    } 
  }
);

export default mongoose.model("Order", OrderSchema);
