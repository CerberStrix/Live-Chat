import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';
import { Provider } from 'react-redux';
import './i18n';
import store from './slices/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
