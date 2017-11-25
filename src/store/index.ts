import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { logger } from '../middleware';
import rootReducer, { RootState } from '../reducers';

export function configureStore(initialState?: RootState) {
  let sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(logger, sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
