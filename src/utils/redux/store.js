import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import WishlistSlice from "./WishlistSlice";
import cardSlice from "./cardSlice";

const store = configureStore({
    reducer: {
        cards: cardSlice,
        cart: cartSlice,
        wishlist: WishlistSlice,
    },
});

export default store;
