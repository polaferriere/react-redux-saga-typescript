import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, Reducer } from 'redux';
import todoReducer from './features/todo/todoSlice';

export interface RootState {
  todos: TodoStoreState;
}

const rootReducer = combineReducers<RootState>({
  todos:todoReducer
})

const store = configureStore({
    reducer:rootReducer
});

export default store

