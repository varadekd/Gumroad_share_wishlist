import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  userID: "656c0d5e7306f441560932ea",
};

export const wishlistSlice = createSlice({
  name: "wishlistStore",
  initialState,
  reducers: {
    addRemoveValue: (state, action) => {
      // Logic to add or remove goes here
      console.log("state: ", state, action);
    },
    updateWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { addRemoveValue, updateWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
