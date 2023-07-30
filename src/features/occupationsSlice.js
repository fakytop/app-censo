import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    occupations: []
}

export const occupationsSlice = createSlice({
    name: "occupations",
    initialState,
    reducers: {
        saveOccupations: (state, action) => {
            state.deptos = action.payload;
        }
    }
})

export const { saveOccupations } = occupationsSlice.actions;

export default occupationsSlice.reducer;