import { useEffect, useRef } from 'react';
import homeHtml from '../sections/home-main.html?raw';
import { runInlineScripts } from '../utils/runInlineScripts.js';

// BAGIAN: KONTEN UTAMA / HOME
export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    runInlineScripts(ref.current);
  }, []);

  return <div ref={ref} data-section="home-main" dangerouslySetInnerHTML={{ __html: homeHtml }} />;
}
