const loadPage = () => {
  const content = document.querySelector('#content');
  const homepage = createHomepage();
  const foodsPage = createFoodsPage();
  const contactPage = createContactPage();
  homepage.setAttribute('data-page', 'homepage');
  foodsPage.setAttribute('data-page', 'foods');
  contactPage.setAttribute('data-page', 'contact');
  homepage.classList.add('is-active');
  foodsPage.classList.add('is-hidden');
  contactPage.classList.add('is-hidden');

  content.appendChild(createNavbar());
  content.appendChild(createHero());
  content.appendChild(homepage);
  content.appendChild(foodsPage);
  content.appendChild(contactPage);
  content.appendChild(createFooter());
  setEventListeners();
}

const createNavbar = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar', 'is-primary');
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('navbar-brand');
  const navbarBrandItem = document.createElement('a');
  navbarBrandItem.classList.add('navbar-item');
  navbarBrandItem.setAttribute('id', 'homepage');
  const navbarTitle = document.createElement('h4');
  navbarTitle.classList.add('title', 'is-4', 'has-text-white');
  navbarTitle.innerHTML = 'Good Eats Co.';
  const navbarMenu = document.createElement('div');
  navbarMenu.classList.add('navbar-menu');
  const navbarEnd = document.createElement('div');
  navbarEnd.classList.add('navbar-end');

  navbar.appendChild(navbarBrand);
  navbarBrand.appendChild(navbarBrandItem);
  navbarBrandItem.appendChild(navbarTitle);
  navbar.appendChild(navbarMenu);
  navbarMenu.appendChild(navbarEnd);
  navbarEnd.appendChild(createNavbarLink('Foods', 'foods'));
  navbarEnd.appendChild(createNavbarLink('Contact', 'contact'));
  return navbar;
}

const createNavbarLink = (text, id) => {
  const navbarLink = document.createElement('a');
  navbarLink.classList.add('navbar-item');
  if(id) navbarLink.setAttribute('id', id);
  const navbarLinkText = document.createElement('p');
  navbarLinkText.innerHTML = text;
  navbarLink.appendChild(navbarLinkText);
  return navbarLink;
}

const createHero = () => {
  const hero = document.createElement('section');
  hero.classList.add('hero', 'is-primary');
  const heroBody = document.createElement('div');
  heroBody.classList.add('hero-body', 'has-text-centered');
  const heroTitle = document.createElement('h1');
  heroTitle.classList.add('title', 'is-1');
  heroTitle.innerHTML = 'Good Eats Co.';
  const heroSubtitle = document.createElement('h2');
  heroSubtitle.classList.add('subtitle', 'is-3');
  heroSubtitle.innerHTML = '(Definitely up to health code)';

  hero.appendChild(heroBody);
  heroBody.appendChild(heroTitle);
  heroBody.appendChild(heroSubtitle);
  return hero;
}

const createIntro = () => {
  const introSection = document.createElement('section');
  introSection.classList.add('section', 'container');
  const introText = document.createElement('p');
  introText.classList.add('is-size-5');
  introText.innerHTML = 'Hello and welcome to my new Greek restaurant! We are very good at cooking and hope that you are not. Come eat our authentic foods!';
  introSection.appendChild(introText);
  return introSection;
}

const createFoodDisplay = (foodItems) => {
  const foodDisplay = document.createElement('div');
  foodDisplay.classList.add('container', 'block');
  const foodDisplaySection = document.createElement('section');
  foodDisplaySection.classList.add('food', 'tile', 'is-ancestor');
  
  foodDisplay.appendChild(foodDisplaySection);
  foodItems.forEach(food => foodDisplaySection.appendChild(food));
  return foodDisplay;
}

const createFoodItem = (picture, label) => {
  const parentTile = document.createElement('div');
  parentTile.classList.add('tile', 'is-parent', 'is-4');
  const childTile = document.createElement('div');
  childTile.classList.add('tile', 'is-child', 'card');
  const foodCardImageContainer = document.createElement('div');
  foodCardImageContainer.classList.add('card-image');
  const foodImageContainer = document.createElement('figure');
  foodImageContainer.classList.add('image', 'is-4by3');
  const foodImage = document.createElement('img');
  foodImage.src = picture;
  
  parentTile.appendChild(childTile);
  childTile.appendChild(foodCardImageContainer);
  foodCardImageContainer.appendChild(foodImageContainer);
  foodImageContainer.appendChild(foodImage);

  if(label) {
    const foodNameLabel = document.createElement('div');
    foodNameLabel.classList.add('food-name-label', 'card-content');
    const foodName = document.createElement('p');
    foodName.classList.add('has-text-centered', 'is-size-4');
    foodName.innerHTML = label;
    childTile.appendChild(foodNameLabel);
    foodNameLabel.appendChild(foodName);
  }
  return parentTile;
}

const createBlockSpacer = () => {
  const blockSpacer = document.createElement('div');
  blockSpacer.classList.add('block');
  return blockSpacer;
}

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
}

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerContent = document.createElement('div');
  footerContent.classList.add('content', 'has-text-centered');
  const footerText = document.createElement('p');
  footerText.innerHTML = '&copy; 2019 Good Eats Co.';
  const footerTextName = document.createElement('p');
  footerTextName.innerHTML = 'Created by: <a href="https://www.github.com/harmolipi" target="_blank">@harmolipi</a>';
  
  footer.appendChild(footerContent);
  footerContent.appendChild(footerText);
  footerContent.appendChild(footerTextName);
  return footer;
}

const createHomepage = () => {
  const homepageFoods = [
    createFoodItem('/src/souvlaki-meal.jpg', 'Souvlaki'),
    createFoodItem('/src/pastitsio.jpg', 'Pastitsio'),
    createFoodItem('/src/gyro.jpg', 'Gyro')
  ]
  const homepage = document.createElement('div');
  homepage.setAttribute('id', 'homepage');
  homepage.appendChild(createIntro());
  homepage.appendChild(createFoodDisplay(homepageFoods));
  homepage.appendChild(createBlockSpacer());
  return homepage;
}

const createFoodsPage = () => {
  const foodsPageRow1 = [
    createFoodItem('/src/souvlaki-meal.jpg', 'Souvlaki'),
    createFoodItem('/src/pastitsio.jpg', 'Pastitsio'),
    createFoodItem('/src/gyro.jpg', 'Gyro')
  ]
  const foodsPageRow2 = [
    createFoodItem('/src/avgolemono.jpg', 'Avgolemono'),
    createFoodItem('/src/dolmades.jpg', 'Dolmades'),
    createFoodItem('/src/saganaki.jpg', 'Saganaki')
  ]
  const foodsPageRow3 = [
    createFoodItem('/src/spanakopita.jpg', 'Spanakopita'),
    createFoodItem('/src/lamb.jpg', 'Lamb'),
    createFoodItem('/src/tiropita.jpg', 'Tiropita')
  ]
  const foodsPage = document.createElement('div');
  const foodsPageTitle = document.createElement('h2');
  foodsPageTitle.classList.add('title', 'is-2');
  foodsPageTitle.innerHTML = 'Foods';
  foodsPage.setAttribute('id', 'foods-page');
  foodsPage.classList.add('section', 'container');
  foodsPage.appendChild(foodsPageTitle);
  foodsPage.appendChild(createFoodDisplay(foodsPageRow1));
  foodsPage.appendChild(createFoodDisplay(foodsPageRow2));
  foodsPage.appendChild(createFoodDisplay(foodsPageRow3));
  foodsPage.appendChild(createBlockSpacer());
  return foodsPage;
}

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
}

const setEventListeners = () => {
  const navbarLinks = document.querySelectorAll('.navbar-item');
  console.log(navbarLinks);
  navbarLinks.forEach(link => link.addEventListener('click', () => {
    const currentPage = document.querySelector('.is-active');
    const newPage = document.querySelector(`[data-page=${link.id}]`);
    currentPage.classList.remove('is-active');
    currentPage.classList.add('is-hidden');
    newPage.classList.add('is-active');
    newPage.classList.remove('is-hidden');
  }));
}

export default loadPage;