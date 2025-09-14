import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './featureTodo/todoSlice'


export const store=configureStore({
    reducer:todoReducer
})