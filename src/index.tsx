import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import DefaultLayout from './container/MainPage';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Switch>
        <Route exact path="/" component={() => <DefaultLayout page={"Dashboard"} /> } />
        <Route path="/dashboard" component={() => <DefaultLayout page={"Dashboard"} /> } />
        <Route path="/todo" component={() => <DefaultLayout page={"Todo"} /> } />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
