import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  error: false,
}
const totalPriceCompute = (cart)=>{
    let sum = 0
    cart.forEach(item => {
        sum += parseInt(item.total)
    });
    return sum
  }


export const totalFetchSlice = createSlice({
  name: "fetchTotal",
  initialState,
  reducers: {
    Computed_Total: (state,action) => {
        state.total = totalPriceCompute(action.payload ? action.payload : [])
        state.error = false
    },
    Zero_Total: (state) => {
        state.total = 0
        state.error = true
    },
  },
});

export const { Computed_Total,Zero_Total } = totalFetchSlice.actions;

export default totalFetchSlice.reducer;
