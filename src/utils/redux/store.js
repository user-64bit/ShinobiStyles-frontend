import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import WishlistSlice from "./WishlistSlice";
import cardSlice from "./cardSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        cards: cardSlice,
        cart: cartSlice,
        wishlist: WishlistSlice,
        user: userSlice,
    },
});

export default store;
