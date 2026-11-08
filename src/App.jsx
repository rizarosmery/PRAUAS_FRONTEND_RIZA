import RB from 'react-bootstrap'

// Integrasi React Bootstrap non-visual agar tampilan halaman tetap sama.
// Komponen React-Bootstrap siap dipakai; mount ini sengaja tidak merender UI.
export default function App() {
  return null
}

// Ekspos opsional untuk verifikasi di console browser.
if (typeof window !== 'undefined') {
  window.__TRIPZAP_REACT_BOOTSTRAP__ = { ReactBootstrap: RB }
}
