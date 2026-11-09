import { useEffect, useRef } from 'react';
import footerHtml from '../sections/footer.html?raw';
import { runInlineScripts } from '../utils/runInlineScripts.js';

// BAGIAN: FOOTER
export default function Footer() {
  const ref = useRef(null);

  useEffect(() => {
    runInlineScripts(ref.current);
  }, []);

  return <div ref={ref} data-section="footer" dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
