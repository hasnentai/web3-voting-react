import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice";

export default configureStore({
  reducer: {
    data: dataSlice,
  },
});
