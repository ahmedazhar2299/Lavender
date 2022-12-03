import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Item: null,
  error: false,
}

export const itemFetchSlice = createSlice({
  name: "fetchItem",
  initialState,
  reducers: {
    Found_Success: (state,action) => {
        state.Item = action.payload
        state.error = false
    },
    Found_Failed: (state) => {
        state.Item = null
        state.error = true
    },
  },
});

export const { Found_Success,Found_Failed } = itemFetchSlice.actions;

export default itemFetchSlice.reducer;
