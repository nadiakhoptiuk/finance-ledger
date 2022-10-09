import { formRef, navRef } from './js/refs';
import { changeHeaderBg } from './js/changeHeaderBg';
import { scrollToAnchor } from './js/smoothScroll';
import { onFormSubmit } from './js/submitForm';

window.addEventListener('scroll', changeHeaderBg);

navRef.addEventListener('click', scrollToAnchor);

formRef.addEventListener('submit', onFormSubmit);
