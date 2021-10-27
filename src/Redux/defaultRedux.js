import { createSlice } from "@reduxjs/toolkit";

export const defaultRedux = createSlice({
  name: "defaultValues",
  initialState: {
    father: [],
    children: [],
  },
  reducers: {

    getFather(state, action) {
      return {
        ...state,
        father: action.payload
      };
    },
    getChildren(state, action) {
      return {
        ...state,
        children: [...action.payload]
      };
    },
  },
});
let copyState = (state) => {
  return JSON.parse(JSON.stringify(state));
};

export const { getFather, getChildren } = defaultRedux.actions;

export default defaultRedux.reducer;
