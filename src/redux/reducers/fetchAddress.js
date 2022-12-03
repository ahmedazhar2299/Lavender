import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 address: null,
  error: false,
}

export const addressFetchSlice = createSlice({
  name: "fetchAddress",
  initialState,
  reducers: {
    Address_Set: (state,action) => {
        state.address = action.payload
        state.error = false
    },
    No_Address: (state) => {
        state.address = null
        state.error = true
    },
  },
});

export const { Address_Set,No_Address } = addressFetchSlice.actions;

export default addressFetchSlice.reducer;
