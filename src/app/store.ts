import { combineReducers, configureStore } from '@reduxjs/toolkit';
import form from '../features/form/formReducer';
import items from '../features/list/listReducer';

const rootReducer = combineReducers({
    form,
    items
})

export const store = configureStore({
    reducer: rootReducer
})
