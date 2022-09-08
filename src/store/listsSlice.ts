import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "./moviesSlice";

export interface MoviesState {
    lists:
        | {
              listID: number;
              listName: string;
              listDesc: string;
              movies: IMovie[];
          }[]
        | null;
}

const initialState: MoviesState = {
    lists: null,
};

export const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        setMoviesState: (state, action) => {
            state = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
// export const {} = moviesSlice.actions;

export default listsSlice.reducer;
