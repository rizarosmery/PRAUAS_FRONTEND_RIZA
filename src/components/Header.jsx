import { useEffect, useRef } from 'react';
import headerHtml from '../sections/header.html?raw';
import { runInlineScripts } from '../utils/runInlineScripts.js';

// BAGIAN: HEADER / NAVIGASI
export default function Header() {
  const ref = useRef(null);

  useEffect(() => {
    runInlineScripts(ref.current);
  }, []);

  return <div ref={ref} data-section="header" dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}
