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
        },
        addNewPerson:(state, action) => {
            state.people.push(action.payload);
        },
        deletePerson:(state, action) => {
            const idCenso = action.payload.idCenso;
            state.people = state.people.filter(p => p.id != idCenso);
        }
    }
})

export const { saveRegisteredById, addNewPerson, deletePerson } = personsSlice.actions;

export default personsSlice.reducer;