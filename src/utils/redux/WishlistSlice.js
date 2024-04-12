import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
    },
    reducers: {
        addWishlist: (state, action) => {
            // state.items.push(action.payload);
            const inWishList = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (!inWishList) {
                state.items.push(action.payload);
            }
        },
        removeWish: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload._id
            );
        },
        // FIXME:Remove Items when create design for Cart
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { addWishlist, clearWishlist, removeWish } = WishlistSlice.actions;
export default WishlistSlice.reducer;
