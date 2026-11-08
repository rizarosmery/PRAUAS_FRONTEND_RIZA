import * as ReactBootstrap from 'react-bootstrap';
import ReactBootstrapDemo from './components/ReactBootstrapDemo.jsx';
import './style.css';

// Ekspos library untuk verifikasi/pemakaian lanjutan di console.
if (typeof window !== 'undefined') {
  window.__TRIPZAP_REACT_BOOTSTRAP__ = {
    React: undefined, // diisi di main.jsx
    ReactBootstrap,
  };
}

export default function App() {
  return <ReactBootstrapDemo />;
}
