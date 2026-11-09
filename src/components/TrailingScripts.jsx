import { useEffect } from 'react';
import trailingHtml from '../sections/trailing.html?raw';
import { runInlineScripts } from '../utils/runInlineScripts.js';

// Memuat script/global markup trailing (setelah wrapper) agar init legacy tetap berjalan.
export default function TrailingScripts() {
  useEffect(() => {
    const container = document.createElement('div');
    container.setAttribute('data-section', 'trailing');
    container.innerHTML = trailingHtml;
    document.body.appendChild(container);
    runInlineScripts(container);
  }, []);

  return null;
}
