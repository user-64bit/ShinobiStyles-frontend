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
        // FIXME:Remove Items when create desing for Cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
