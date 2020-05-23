import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { logger } from '../middleware';
import rootReducer, { RootState } from '../features/todo/reducers';

export function configureStore(initialState?: RootState) {
  let sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(logger, sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../features/todo/reducers', () => {
      const nextReducer = require('../features/todo/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
