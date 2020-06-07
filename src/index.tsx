import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './features/todo/todos/components/App';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
