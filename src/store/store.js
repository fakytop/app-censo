import {configureStore} from '@reduxjs/toolkit';
import deptosReducer from '../features/deptosSlice';
import occupationsReducer from '../features/occupationsSlice';
import personsReducer from '../features/personsSlice';
import allRegisteredReducer from '../features/allRegistered';

export const store = configureStore({
    reducer : {
        deptos: deptosReducer,
        occupations: occupationsReducer,
        persons: personsReducer,
        allRegistered: allRegisteredReducer,
    }
})