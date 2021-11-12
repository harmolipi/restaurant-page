import {createNavbar, createHero, createFooter} from "./header-footer-module";
import createHomepage from "./page-home-module";
import createFoodsPage from "./page-foods-module";
import createContactPage from "./page-contact-module";

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
};

const setEventListeners = () => {
  const navbarLinks = document.querySelectorAll('.navbar-item');
  navbarLinks.forEach(link => link.addEventListener('click', () => {
    const currentPage = document.querySelector('.is-active');
    const newPage = document.querySelector(`[data-page=${link.id}]`);
    currentPage.classList.remove('is-active');
    currentPage.classList.add('is-hidden');
    newPage.classList.add('is-active');
    newPage.classList.remove('is-hidden');
  }));
};

export default loadPage;