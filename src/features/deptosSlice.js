import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people : []
}

export const deptosSlice = createSlice({
    name:"deptos",
    initialState,
    reducers:{

    }
})

export const {} = deptosSlice.actions;

export default deptosSlice.reducer;