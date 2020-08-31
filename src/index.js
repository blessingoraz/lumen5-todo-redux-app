import './css/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/redux/store';

import App from './js/components/App';

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);