import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRegistered: 0
}

export const allRegisteredSlice = createSlice({
    name:"allRegistered",
    initialState,
    reducers:{
        saveAllRegistered(state,action) {
            state.allRegistered = action.payload;
        }
    }
})

export const { saveAllRegistered } = allRegisteredSlice.actions;

export default allRegisteredSlice.reducer;