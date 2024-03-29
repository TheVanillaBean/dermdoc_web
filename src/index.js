import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './ScrollToTop';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
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
