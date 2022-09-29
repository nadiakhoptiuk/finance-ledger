import { updateLink } from './setActiveLink';

export function scrollToAnchor(evt) {
  if (evt?.target?.nodeName !== 'A') return;

  const anchorId = evt?.target?.attributes?.href?.value;

  if (anchorId === '/index.html') {
    return;
  } else {
    evt.preventDefault();

    const neededSection = document.querySelector(`${anchorId}`);

    neededSection?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

    updateLink(anchorId);
  }
}
