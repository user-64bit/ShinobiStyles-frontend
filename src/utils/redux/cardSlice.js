import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        allCards: [],
        trendyCards: [],
    },
    reducers: {
        addCards: (state, action) => {
            state.allCards = action.payload;
        },
        addTrendyCards: (state, action) => {
            state.trendyCards = action.payload;
        },
        // FIXME:Remove Items when create design for Cart
        clearCards: (state) => {
            state.allCards = [];
        },
        clearTrendyCards: (state) => {
            state.trendyCards = [];
        },
    },
});

export const { addCards, addTrendyCards, clearCards, clearTrendyCards } =
    cardSlice.actions;
export default cardSlice.reducer;
