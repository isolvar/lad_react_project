import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import moviesReducer from "./moviesSlice";
import listsReducer from "./listsSlice";
import modalSlice from "./modalSlice";
import editSlice from "./editSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        watchlists: listsReducer,
        modal: modalSlice,
        edit: editSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
