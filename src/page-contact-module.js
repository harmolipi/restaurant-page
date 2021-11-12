const createContactPage = () => {
  const contactPage = document.createElement('div');
  contactPage.setAttribute('id', 'contact');
  contactPage.classList.add('section', 'container');
  const contactPageTitle = document.createElement('h2');
  contactPageTitle.classList.add('title', 'is-2');
  contactPageTitle.innerHTML = 'Contact Us';

  const contactForm = document.createElement('form');
  contactForm.appendChild(createFormField('Name', 'text'));
  contactForm.appendChild(createFormField('Email', 'email'));
  contactForm.appendChild(createFormField('Message', 'textarea'));
  contactForm.appendChild(createFormField('Submit', 'button'));

  contactPage.appendChild(contactPageTitle);
  contactPage.appendChild(contactForm);
  return contactPage;
};

const createFormField = (label, type) => {
  const formField = document.createElement('div');
  formField.classList.add('field');
  const formControl = document.createElement('div');
  formControl.classList.add('control');
  
  if(type === 'button') {
    const formButton = document.createElement('button');
    formButton.classList.add('button', 'is-primary');
    formButton.innerHTML = label;
    formField.appendChild(formButton);
  } else {
    const formLabel = document.createElement('label');
    formLabel.classList.add('label');
    formLabel.innerHTML = label;
    formField.appendChild(formLabel);
    formField.appendChild(formControl);
    const formInput = document.createElement(type === 'textarea' ? 'textarea' : 'input');
    formInput.classList.add('input', type);
    formInput.setAttribute('type', type);
    formControl.appendChild(formInput);
  }
  return formField;
};

export default createContactPage;