// import Notiflix from 'notiflix';
// import { Notify, Report } from 'notiflix/build/notiflix-notify-aio';
import { formRef, requiredFormInputRef } from './refs';

// Notiflix.Report.init({
//   success: {
//     background: '#32c682',
//     textColor: '#28a745',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-check-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(0, 0, 0, 0.8)',
//   },
// });

export function onFormSubmit(event) {
  event.preventDefault();

  const userEmail = event?.currentTarget?.elements?.email?.value;

  if (
    userEmail.trim() === '' ||
    !userEmail.includes('@') ||
    !userEmail.includes('.')
  ) {
    requiredFormInputRef.focus();
    requiredFormInputRef.classList.add('invalid');

    const removeClassTimeout = setTimeout(() => {
      requiredFormInputRef.classList.remove('invalid');

      clearTimeout(removeClassTimeout);
    }, 5000);
  } else {
    formRef.reset();

    if (requiredFormInputRef.classList.contains('invalid')) {
      requiredFormInputRef.classList.remove('invalid');
    }

    // Notiflix.Report.success(
    //   '',
    //   'Thanks for your request. Our manager will contact you',
    //   'Back to site',
    //   function callback() {
    //     window.location.href = 'index.html';
    //   }
    // );
  }
}
