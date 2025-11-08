import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app';
import './index.css';
import { store } from './store';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element "root" not found');
}

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
