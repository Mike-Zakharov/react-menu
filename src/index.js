import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles-stuf/font/Golos-Text_Regular.css';
import './index.sass';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


