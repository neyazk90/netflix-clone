import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        popularMovies: null,
        nowPlayingMovies:null
    },
    reducers: {
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        },
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});
export const { addPopularMovie , addNowPlayingMovie } = movieListSlice.actions;
export default movieListSlice.reducer;
