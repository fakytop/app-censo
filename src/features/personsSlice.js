import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people : []
}

export const personsSlice = createSlice({
    name:"person",
    initialState,
    reducers:{

    }
})

export const {} = personsSlice.actions;

export default personsSlice.reducer;