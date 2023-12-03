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
      console.log("state: ", state, action);
      // state.whishlist = action.payload;
    },
  },
});

export const { addRemoveValue, updateWishlist } = whishlistSlice.actions;
export default whishlistSlice.reducer;
