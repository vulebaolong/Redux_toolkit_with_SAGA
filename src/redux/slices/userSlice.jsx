import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLogin: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginREDU: (state, { payload }) => {
            state.userLogin = payload;
        },
    },
});

export const {loginREDU} = userSlice.actions;

export default userSlice.reducer;
