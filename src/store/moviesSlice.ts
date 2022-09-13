import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGet } from "../server_services/server_api";
import { transformMovies } from "../server_services/transformers";

export interface IMovie {
    id: number;
    posterUrl: string;
    rating: number;
    nameRU: string;
    nameEN: string;
    year: number;
    description: string;
    duration: number | null;
    watched?: boolean;
}

export interface IMoviesState {
    movies: IMovie[] | null;
    status: "Idle" | "Error" | "Loading" | "Fulfilled";
}

interface IRequestFetchMovie {
    type: string;
    search: string;
}

export const fetchMovie = createAsyncThunk<
    IMovie[],
    IRequestFetchMovie,
    { rejectValue: string }
>("movies/fetchMovie", async (request, { rejectWithValue }) => {
    try {
        const response = await apiGet(request);
        const transformedData = transformMovies(response.data.docs);
        return transformedData;
    } catch (error) {
        return rejectWithValue("Error");
    }
});

const initialState: IMoviesState = {
    movies: null,
    status: "Idle",
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
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.status = "Fulfilled";
        }),
            builder.addCase(fetchMovie.pending, (state) => {
                state.status = "Loading";
            }),
            builder.addCase(fetchMovie.rejected, (state) => {
                state.status = "Error";
            });
    },
});

// Action creators are generated for each case reducer function
export const { clearState, setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
