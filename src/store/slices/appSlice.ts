import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: true,
        lang: 'en',
        isAuthForm: false,
    },
    reducers:
    {
        addUser:(state, action) => {
            state.user = action.payload
        },
        language: (state, action) => {
            state.lang = action.payload;
        },
        isAuthForm: (state,action) => { 
            state.isAuthForm = action.payload;
        }
    }
});

export const {addUser, language , isAuthForm} = appSlice.actions

export default appSlice.reducer;