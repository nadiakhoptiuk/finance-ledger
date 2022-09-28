import { updateLink } from './setActiveLink';

export function scrollToAnchor(evt) {
  const anchorId = evt.target.attributes.href.value;

  console.log(anchorId);
  const neededSection = document.querySelector(`${anchorId}`);

  neededSection.scrollIntoView({ block: 'start', behavior: 'smooth' });

  updateLink(anchorId);
}
