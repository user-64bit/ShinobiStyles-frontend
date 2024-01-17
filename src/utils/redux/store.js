import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import WishlistSlice from "./WishlistSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: WishlistSlice,
    },
});

export default store;
