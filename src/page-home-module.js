import {createFoodItem, createFoodDisplay} from "./food-items-module";
import {createBlockSpacer} from "./block-spacer-module";

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
};

const createIntro = () => {
  const introSection = document.createElement('section');
  introSection.classList.add('section', 'container');
  const introText = document.createElement('p');
  introText.classList.add('is-size-5');
  introText.innerHTML = 'Hello and welcome to my new Greek restaurant! We are very good at cooking and hope that you are not. Come eat our authentic foods!';
  introSection.appendChild(introText);
  return introSection;
};

export default createHomepage;