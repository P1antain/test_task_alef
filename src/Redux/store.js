import { configureStore } from "@reduxjs/toolkit";
import defaultRedux from "./defaultRedux";

export const store = configureStore({
  reducer: {
    default: defaultRedux,
  },
});
