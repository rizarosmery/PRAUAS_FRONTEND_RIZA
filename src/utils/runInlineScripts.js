// Re-executes <script> tags inside a container after dangerouslySetInnerHTML,
// because React does not execute scripts injected via innerHTML.
export function runInlineScripts(container) {
  if (!container) return;
  const scripts = Array.from(container.querySelectorAll('script'));
  scripts.forEach((oldScript) => {
    const newScript = document.createElement('script');
    Array.from(oldScript.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}
