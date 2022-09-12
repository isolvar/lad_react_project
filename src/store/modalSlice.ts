import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "./moviesSlice";

export interface IModalState {
    data: IMovie | null;
}

const initialState: IModalState = {
    data: null,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setModalData } = modalSlice.actions;

export default modalSlice.reducer;
