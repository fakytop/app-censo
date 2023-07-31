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
            console.log(state.people);
        },
        filteredByOccupation: (state, action) => {
            console.log(action.payload);
            console.log(initialState.people)
            if(action.payload === "") {
                state.people = initialState.people;
            } else {
                console.log(state.people);
                const filteredOccupation = state.people.filter(p => p.ocupacion === action.payload);
                console.log(filteredOccupation);
                state.people = filteredOccupation
            }
        }
    }
})

export const { saveRegisteredById, addNewPerson, filteredByOccupation } = personsSlice.actions;

export default personsSlice.reducer;