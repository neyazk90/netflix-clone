import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import movieListSlice from "./slices/movieListSlice";

export const store = configureStore({
    reducer: {
        app:appSlice,
        movieList:movieListSlice
    }
});
