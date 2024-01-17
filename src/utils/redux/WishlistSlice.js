import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
    },
    reducers: {
        addWishlist: (state, action) => {
            state.items.push(action.payload);
        },
        // FIXME:Remove Items when create desing for Cart
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { addWishlist, clearWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;
