import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './ScrollToTop';

import { createBrowserHistory } from 'history';
import queryString from 'query-string';
import { BrowserRouter } from 'react-router-dom';

function preserveQueryParameters(history, preserve, location) {
  const currentQuery = queryString.parse(history.location.search);
  if (currentQuery) {
    const preservedQuery = {};
    for (let p of preserve) {
      const v = currentQuery[p];
      if (v) {
        preservedQuery[p] = v;
      }
    }
    if (location.search) {
      Object.assign(preservedQuery, queryString.parse(location.search));
    }
    location.search = queryString.stringify(preservedQuery);
  }
  return location;
}

function createLocationDescriptorObject(location, state) {
  return typeof location === 'string' ? { pathname: location, state } : location;
}

function createPreserveQueryHistory(createHistory, queryParameters) {
  return (options) => {
    const history = createHistory(options);
    const oldPush = history.push,
      oldReplace = history.replace;
    history.push = (path, state) =>
      oldPush.apply(history, [
        preserveQueryParameters(
          history,
          queryParameters,
          createLocationDescriptorObject(path, state)
        ),
      ]);
    history.replace = (path, state) =>
      oldReplace.apply(history, [
        preserveQueryParameters(
          history,
          queryParameters,
          createLocationDescriptorObject(path, state)
        ),
      ]);
    return history;
  };
}

const history = createPreserveQueryHistory(createBrowserHistory, ['locale', 'token', 'returnTo'])();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <PersistGate persistor={persistor}>
        <CookiesProvider>
          <React.StrictMode>
            <ScrollToTop />
            <App />
          </React.StrictMode>
        </CookiesProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
