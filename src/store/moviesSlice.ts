import { createSlice } from "@reduxjs/toolkit";

export interface MoviesState {
    value: number | null;
}

const initialState: MoviesState = {
    value: null,
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
        setMoviesState: (state, action) => {
            state = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
