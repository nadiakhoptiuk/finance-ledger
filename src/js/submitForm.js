import { formRef } from './refs';

export function onFormSubmit(event) {
  console.log(event.target);

  event.preventDefault();
  console.log('hello');

  formRef.reset();
}
