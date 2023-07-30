import {configureStore} from '@reduxjs/toolkit';
import deptosReducer from '../features/deptosSlice';

export const store = configureStore({
    reducer : {
        deptos: deptosReducer
    }
})