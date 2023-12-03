import { configureStore } from "@reduxjs/toolkit";
import whishlistReducer from "./store/wishlist";

export const store = configureStore({
  reducer: {
    wishlistStore: whishlistReducer,
  },
});
