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
  footerText.innerHTML = '&copy; 2019 Good Eats Co.';
  const footerTextName = document.createElement('p');
  footerTextName.innerHTML = 'Created by: <a href="https://www.github.com/harmolipi" target="_blank">@harmolipi</a>';
  
  footer.appendChild(footerContent);
  footerContent.appendChild(footerText);
  footerContent.appendChild(footerTextName);
  return footer;
};

export {
  createNavbar,
  createHero,
  createFooter
};