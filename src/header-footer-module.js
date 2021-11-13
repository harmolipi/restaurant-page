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
  const navbarBurger = document.createElement('div');
  navbarBurger.classList.add('navbar-burger');
  navbarBurger.setAttribute('id', 'navBurger');
  const navbarBurgerLine1 = document.createElement('span');
  const navbarBurgerLine2 = document.createElement('span');
  const navbarBurgerLine3 = document.createElement('span');
  const navbarMenu = document.createElement('div');
  navbarMenu.classList.add('navbar-menu');
  navbarMenu.setAttribute('id', 'navMenu');
  const navbarEnd = document.createElement('div');
  navbarEnd.classList.add('navbar-end');

  navbar.appendChild(navbarBrand);
  navbarBrand.appendChild(navbarBrandItem);
  navbarBrand.appendChild(navbarBurger);
  navbarBurger.appendChild(navbarBurgerLine1);
  navbarBurger.appendChild(navbarBurgerLine2);
  navbarBurger.appendChild(navbarBurgerLine3);
  navbarBrandItem.appendChild(navbarTitle);
  navbar.appendChild(navbarMenu);
  navbarMenu.appendChild(navbarEnd);
  navbarEnd.appendChild(createNavbarLink('Foods', 'foods'));
  navbarEnd.appendChild(createNavbarLink('Contact', 'contact'));
  addBurgerEventListener();
  return navbar;
};

const createNavbarLink = (text, id) => {
  const navbarLink = document.createElement('a');
  navbarLink.classList.add('navbar-item');
  if(id) navbarLink.setAttribute('id', id);
  const navbarLinkText = document.createElement('p');
  navbarLinkText.innerHTML = text;
  navbarLink.appendChild(navbarLinkText);
  return navbarLink;
};

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
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const footerContent = document.createElement('div');
  footerContent.classList.add('content', 'has-text-centered');
  const footerText = document.createElement('p');
  footerText.innerHTML = '&copy; 2021 Good Eats Co.';
  const footerTextName = document.createElement('p');
  footerTextName.innerHTML = 'Created by: <a href="https://www.github.com/harmolipi" target="_blank">@harmolipi</a>';
  const footerTextGithub = document.createElement('p');
  footerTextGithub.innerHTML = '<a href="https://www.github.com/harmolipi/restaurant-page" target="_blank">See on Github.</a>';

  footer.appendChild(footerContent);
  footerContent.appendChild(footerText);
  footerContent.appendChild(footerTextName);
  footerContent.appendChild(footerTextGithub);
  return footer;
};

const addBurgerEventListener = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#navBurger');
    burger.addEventListener('click', () => {
      const menu = document.querySelector('#navMenu');
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });
};

export {
  createNavbar,
  createHero,
  createFooter
};