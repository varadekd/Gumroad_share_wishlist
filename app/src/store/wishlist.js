import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  whishlist: [],
};

export const whishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addRemoveValue: (state, action) => {
      // Logic to add or remove goes here
      console.log("state: ", state, action);
    },
    updateWishlist: (state, action) => {
      state.whishlist = action.payload;
    },
  },
});

export const { addRemoveValue, updateValue } = whishlistSlice.actions;
export default whishlistSlice.reducer;
