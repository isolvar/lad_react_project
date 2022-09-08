import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import listsReducer from "./listsSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        moviesList: listsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
