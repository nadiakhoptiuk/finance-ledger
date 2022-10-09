import { formRef, requiredFormInputRef } from './refs';

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
    if (requiredFormInputRef.classList.contains('invalid')) {
      requiredFormInputRef.classList.remove('invalid');
    }

    const formData = new FormData(formRef);

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(res => {
        formRef.reset();
        return res.json();
      })
      .catch(error => console.log('Sending form failed'));
  }
}
