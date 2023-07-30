import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: []
}

export const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        saveRegisteredById: (state, action) => {
            state.people = action.payload;
        }
    }
})

export const { saveRegisteredById } = personsSlice.actions;

export default personsSlice.reducer;