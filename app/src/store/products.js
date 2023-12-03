import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addRemoveValue: (state, action) => {
      // Logic to add or remove goes here
      console.log("state: ", state, action);
    },
    updateValue: (state, action) => {
      state.whishlist = action.payload;
    },
  },
});

export const { addRemoveValue, updateValue } = whishlistSlice.actions;
export default whishlistSlice.reducer;
