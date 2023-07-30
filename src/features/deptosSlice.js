import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deptos: []
}

export const deptosSlice = createSlice({
    name: "deptos",
    initialState,
    reducers: {
        saveDptos: (state, action) => {
            state.deptos = action.payload;
        }
    }
})

export const { saveDptos } = deptosSlice.actions;

export default deptosSlice.reducer;