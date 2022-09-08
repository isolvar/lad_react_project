import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "./moviesSlice";

interface IListItem {
    listID: number;
    listName: string;
    listDesc: string;
    movies: IMovie[];
}

export interface IListsState {
    lists: IListItem[] | null;
}

const initialState: IListsState = {
    lists: null,
};

export const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        clearState: (state) => {
            state.lists = null;
        },
        addList: (state, action) => {
            if (state.lists === null) {
                state.lists = [];
                const list: IListItem = {
                    listID: 0,
                    listDesc: action.payload.listDesc,
                    listName: action.payload.listName,
                    movies: [],
                };
                state.lists.push(list);
            } else {
                const list: IListItem = {
                    listID: state.lists.length,
                    listDesc: action.payload.listDesc,
                    listName: action.payload.listName,
                    movies: [],
                };
                state.lists.push(list);
            }
        },
        removeListById: (state, action) => {
            state.lists?.splice(action.payload.listID, 1);
            state.lists?.forEach((el, index) => {
                el.listID = index;
            });
        },
        addMovieToListByListId: (state, action) => {
            state.lists?.forEach((list) => {
                if (list.listID === action.payload.listID) {
                    list.movies.push(action.payload.movie);
                }
            });
        },
        removeMovieByListIdAndMovieId: (state, action) => {
            if (state.lists === null) return;
            let indexToRemove = 0;
            state.lists[action.payload.listID].movies.forEach(
                (movie, index) => {
                    if (movie.id === action.payload.movieId)
                        indexToRemove = index;
                }
            );
            state.lists[action.payload.listID].movies.splice(indexToRemove, 1);
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    clearState,
    addList,
    removeListById,
    addMovieToListByListId,
    removeMovieByListIdAndMovieId,
} = listsSlice.actions;

export default listsSlice.reducer;
