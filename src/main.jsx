// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleApp from './SimpleApp';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>
);