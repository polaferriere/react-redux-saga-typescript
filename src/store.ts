import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, Reducer } from 'redux';
import todos from './features/todo/reducers/todos';

export interface RootState {
  todos: TodoStoreState;
}

const rootReducer = combineReducers<RootState>({
  todos
})

const store = configureStore({
    reducer:rootReducer
});

export {store, combineReducers}

