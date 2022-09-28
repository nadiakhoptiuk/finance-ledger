import { navRef } from './js/refs';
import { changeHeaderBg } from './js/changeHeaderBg';
import { scrollToAnchor } from './js/smoothScroll';

window.addEventListener('scroll', changeHeaderBg);

navRef.addEventListener('click', scrollToAnchor);
