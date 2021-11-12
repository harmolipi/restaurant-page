// export default function loadPage() {
//   console.log('loadPage running');
//   const content = document.querySelector('#content');
//   content.appendChild(createNavbar());
// }

const loadPage = () => {
  const content = document.querySelector('#content');
  content.appendChild(createNavbar());
  content.appendChild(createHero());
  content.appendChild(createIntro());
  content.appendChild(createFoodDisplay());
  content.appendChild(createFooter());
}

const createNavbar = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  const navbarBrand = document.createElement('div');
  navbarBrand.classList.add('navbar-brand');
  const navbarBrandItem = document.createElement('div');
  navbarBrandItem.classList.add('navbar-item');
  navbarBrandItem.innerHTML = 'Good Eats Co.';
  
  navbar.appendChild(navbarBrand);
  navbarBrand.appendChild(navbarBrandItem);
  return navbar;
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
  heroSubtitle.innerHTML = '(Definitely up to code)';

  hero.appendChild(heroBody);
  heroBody.appendChild(heroTitle);
  heroBody.appendChild(heroSubtitle);
  return hero;
}

const createIntro = () => {
  const introSection = document.createElement('section');
  introSection.classList.add('section', 'container');
  const introText = document.createElement('p');
  introText.innerHTML = 'Hello and welcome to my new Greek restaurant! We are very good at cooking and hope that you are not. Come eat our authentic foods!';
  introSection.appendChild(introText);
  return introSection;
}

const createFoodDisplay = () => {
  const foodDisplay = document.createElement('div');
  foodDisplay.classList.add('container');
  const foodDisplaySection = document.createElement('section');
  foodDisplaySection.classList.add('food', 'tile', 'is-ancestor');
  
  foodDisplay.appendChild(foodDisplaySection);
  foodDisplaySection.appendChild(createFoodItem('/src/souvlaki-meal.jpg'));
  foodDisplaySection.appendChild(createFoodItem('/src/pastitsio.jpg'));
  foodDisplaySection.appendChild(createFoodItem('/src/gyro.jpg'));
  return foodDisplay;
}

const createFoodItem = (picture) => {
  const parentTile = document.createElement('div');
  parentTile.classList.add('tile', 'is-parent', 'is-4');
  const childTile = document.createElement('div');
  childTile.classList.add('tile', 'is-child', 'box');
  const foodImageContainer = document.createElement('figure');
  foodImageContainer.classList.add('image');
  const foodImage = document.createElement('img');
  foodImage.src = picture;

  parentTile.appendChild(childTile);
  childTile.appendChild(foodImageContainer);
  foodImageContainer.appendChild(foodImage);
  return parentTile;
}

const createFooter = () => {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('container');
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerContent = document.createElement('div');
  footerContent.classList.add('content', 'has-text-centered');
  const footerText = document.createElement('p');
  footerText.innerHTML = '&copy; 2019 Good Eats Co.';
  const footerTextName = document.createElement('p');
  footerTextName.innerHTML = 'Created by: <a href="https://www.github.com/harmolipi" target="_blank">@harmolipi</a>';
  
  footerContainer.appendChild(footer);
  footer.appendChild(footerContent);
  footerContent.appendChild(footerText);
  footerContent.appendChild(footerTextName);
  return footerContainer;
}

export default loadPage;