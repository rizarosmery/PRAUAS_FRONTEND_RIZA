import * as ReactBootstrap from 'react-bootstrap';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import HomeTwo from './components/HomeTwo.jsx';
import TrailingScripts from './components/TrailingScripts.jsx';
import './style.css';

// Ekspos library untuk verifikasi/pemakaian lanjutan.
if (typeof window !== 'undefined') {
  window.__TRIPZAP_REACT_BOOTSTRAP__ = {
    ...(window.__TRIPZAP_REACT_BOOTSTRAP__ || {}),
    ReactBootstrap,
  };
}

// Tampilan home utama (disusun dari komponen per fungsi/bagian).
export default function App() {
  return (
    <>
      {/* WRAPPER UTAMA */}
      <div className="wrapper">
        {/* ===== HEADER / NAVIGASI ===== */}
        <Header />

        {/* ===== KONTEN UTAMA / HOME ===== */}
        <Home />

        {/* HomeTwo tersedia sebagai komponen terpisah (./components/HomeTwo.jsx) */}

        {/* ===== FOOTER ===== */}
        <Footer />
      </div>

      {/* Script/elemen global trailing (legacy init) */}
      <TrailingScripts />
    </>
  );
}

export { HomeTwo };
