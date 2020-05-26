import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducer from './features/todo/todoSlice';
import visibilityFilterReducer from './features/todo/filterSlice';
import helloSaga from './features/todo/sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  todos: TodoStoreState,
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

