import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Catatan: TIDAK mengimpor 'bootstrap/dist/css/bootstrap.min.css'
// karena tema sudah memuat Bootstrap CSS sendiri (public/assets/css/bootstrap.min.css).

const rootEl = document.getElementById('root') || document.getElementById('react-bootstrap-root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

if (typeof window !== 'undefined') {
  window.__TRIPZAP_REACT_BOOTSTRAP__ = {
    ...(window.__TRIPZAP_REACT_BOOTSTRAP__ || {}),
    React,
  };
}
