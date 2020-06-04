import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducer from './features/todo/todos/todoSlice';
import visibilityFilterReducer from './features/todo/filter/filterSlice';
import helloSaga from './features/todo/todos/sagas';
import createSagaMiddleware from 'redux-saga';
import { TodoStore } from './features/todo/todos/store';
const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  todos: TodoStore,
  visibilityFilter: string
}

const rootReducer = combineReducers<RootState>({
  todos:todoReducer,
  visibilityFilter: visibilityFilterReducer
})

const store = configureStore({
    reducer:rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(helloSaga);

export default store

