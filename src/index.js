import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles-stuf/font/Golos-Text_Regular.css';
import './index.sass';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = { store }>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);


