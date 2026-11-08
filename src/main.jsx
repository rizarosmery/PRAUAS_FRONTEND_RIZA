import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Catatan: TIDAK mengimpor 'bootstrap/dist/css/bootstrap.min.css'
// karena tema halaman sudah memuat Bootstrap CSS sendiri
// (public/assets/css/bootstrap.min.css), sehingga tampilan website tidak berubah.

const rootEl = document.getElementById('react-bootstrap-root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

if (typeof window !== 'undefined' && window.__TRIPZAP_REACT_BOOTSTRAP__) {
  window.__TRIPZAP_REACT_BOOTSTRAP__.React = React;
}
