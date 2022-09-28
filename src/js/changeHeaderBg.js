import { headerSectionRef } from './refs';

export function changeHeaderBg() {
  let device = window.innerWidth < 768 ? 'mobile' : 'desktop';

  if (device === 'mobile') {
    window.scrollY > 120
      ? headerSectionRef.classList.add('visible')
      : headerSectionRef.classList.remove('visible');
  }

  if (device === 'desktop') {
    window.scrollY > 70
      ? headerSectionRef.classList.add('visible')
      : headerSectionRef.classList.remove('visible');
  }
}
