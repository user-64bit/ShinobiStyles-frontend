import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload._id
            );
        },
        // FIXME:Remove Items when create desing for Cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItems, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
