import { createSlice } from "@reduxjs/toolkit";

export interface IMovie {
    id?: number;
    posterUrl?: string;
    rating?: number;
    nameRU?: string;
    nameEN?: string;
    year?: number;
    description?: string;
    duration?: number;
}

export interface IMoviesState {
    movies: IMovie[] | null;
}

const initialState: IMoviesState = {
    movies: null,
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearState: (state) => {
            state.movies = null;
        },

        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { clearState, setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
