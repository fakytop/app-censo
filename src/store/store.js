import {configureStore} from '@reduxjs/toolkit';
import deptosReducer from '../features/deptosSlice';
import occupationsReducer from '../features/occupationsSlice';

export const store = configureStore({
    reducer : {
        deptos: deptosReducer,
        occupations: occupationsReducer,
    }
})