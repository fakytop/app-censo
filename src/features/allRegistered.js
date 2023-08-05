import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRegistered: 0
}

export const allRegisteredSlice = createSlice({
    name:"allRegistered",
    initialState,
    reducers:{
        saveAllRegistered:(state,action)=> {
            state.allRegistered = action.payload;
        },
        addNewRegistered:(state)=> {
            state.allRegistered++;
        },
        deleteRegistered:(state)=> {
            state.allRegistered--;
        },
        clearAllRegistered:(state) => {
            state.allRegistered = 0;
        }
    }
})

export const { saveAllRegistered, addNewRegistered, deleteRegistered, clearAllRegistered } = allRegisteredSlice.actions;

export default allRegisteredSlice.reducer;