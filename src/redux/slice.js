import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "voteCounts",
  initialState: {
    bjsValue: 0,
    cjsValue: 0,
  },
  reducers: {
    setCJSData: (state, action) => {
      state.cjsValue = action.payload;
    },
    setBJSData: (state, action) => {
      state.bjsValue = action.payload;
    },
  },
});

export const { setCJSData, setBJSData } = dataSlice.actions;
export default dataSlice.reducer;
