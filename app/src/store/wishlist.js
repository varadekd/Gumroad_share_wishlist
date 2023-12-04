import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  userID: "656c0d5e7306f441560932ea",
};

export const wishlistSlice = createSlice({
  name: "wishlistStore",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { addRemoveValue, updateWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
