import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        userShippingDetails: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        setUserShippingDetails: (state, action) => {
            state.userShippingDetails = action.payload;
        },
    },
});

export const { setUser, clearUser, setUserShippingDetails } = userSlice.actions;
export default userSlice.reducer;
