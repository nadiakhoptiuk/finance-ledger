import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { formRef, requiredFormInputRef } from './refs';

export function onFormSubmit(event) {
  event.preventDefault();
  if (
    !requiredFormInputRef.value ||
    !requiredFormInputRef.value.includes('@') ||
    !requiredFormInputRef.value.includes('.')
  ) {
    Notiflix.Notify.failure(
      "Email field is required and must contains symbols '@' and '.'",
      { timeout: 3000 }
    );

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

    Notiflix.Notify.success(
      'Thanks for your request. Our manager will contact you',
      { timeout: 3000 }
    );
  }
}
