export function updateLink(id) {
  document
    .querySelector('.nav__link--current')
    ?.classList.remove('nav__link--current');

  document
    .querySelector(`a[href="${id}"]`)
    ?.classList.add('nav__link--current');
}
