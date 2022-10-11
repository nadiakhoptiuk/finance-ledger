import { formRef, requiredFormInputRef } from './refs';

export function onFormSubmit(event) {
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

    event.preventDefault();
  } else {
    if (requiredFormInputRef.classList.contains('invalid')) {
      requiredFormInputRef.classList.remove('invalid');
    }

    const formData = new FormData(formRef);

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');

        formRef.reset();
      })
      .catch(error => console.log('Sending form failed'));
  }
}
