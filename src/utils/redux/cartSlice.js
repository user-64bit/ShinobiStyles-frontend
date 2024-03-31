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
        updateItem: (state, action) => {
            state.items = state.items.map((item) =>
                item._id === action.payload._id ? action.payload : item
            );
        },
        // FIXME:Remove Items when create desing for Cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItems, clearCart, removeItem, updateItem } =
    cartSlice.actions;
export default cartSlice.reducer;
