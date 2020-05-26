import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducer from './features/todo/todoSlice';
import visibilityFilterReducer from './features/todo/filterSlice';

export interface RootState {
  todos: TodoStoreState,
  visibilityFilter: string
}

const rootReducer = combineReducers<RootState>({
  todos:todoReducer,
  visibilityFilter: visibilityFilterReducer
})

const store = configureStore({
    reducer:rootReducer
});

export default store

