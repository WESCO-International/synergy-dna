export function makeButton({ testid, label = 'GO', href, onClick, classes, variant }) {

  const el = document.createElement(href ? 'a' : 'button');
  el.classList.add('button');
  if (classes) el.classList.add(classes);
  if (variant) el.classList.add(variant);
  if (testid) el.setAttribute('data-testid', testid);
  if (href) el.setAttribute('href', href);
  el.innerHTML = `
    <span>${label}</span>
  `;
  
  if (!onClick) return el;

  el.addEventListener('click', onClick);
  
  return el;
}
