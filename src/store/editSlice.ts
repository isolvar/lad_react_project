import { createSlice } from "@reduxjs/toolkit";

export interface IEditState {
    watchlistId: number | null;
    watchlistName: string;
    watchlistDesc: string;
}

const initialState: IEditState = {
    watchlistId: null,
    watchlistName: "",
    watchlistDesc: "",
};

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        setEditData: (state, action) => {
            state.watchlistId = action.payload.watchlistId;
            state.watchlistName = action.payload.watchlistName;
            state.watchlistDesc = action.payload.watchlistDesc;
        },
        clearEditState: (state) => {
            state.watchlistId = null;
            state.watchlistName = "";
            state.watchlistDesc = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { setEditData, clearEditState } = editSlice.actions;

export default editSlice.reducer;
