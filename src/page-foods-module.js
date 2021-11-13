import {createFoodItem, createFoodDisplay} from "./food-items-module";
import {createBlockSpacer} from "./block-spacer-module";
import Souvlaki from './souvlaki-meal.jpg';
import Pastitsio from '/src/pastitsio.jpg';
import Gyro from '/src/gyro.jpg';
import Avgolemono from '/src/avgolemono.jpg';
import Dolmades from '/src/dolmades.jpg';
import Saganaki from '/src/saganaki.jpg';
import Lamb from '/src/lamb.jpg';
import Spanakopita from '/src/spanakopita.jpg';
import Tiropita from '/src/tiropita.jpg';

const createFoodsPage = () => {
  const foodImages = createImageElements();
  const foodsPageRow1 = [
    createFoodItem(foodImages[0], 'Souvlaki'),
    createFoodItem(foodImages[1], 'Pastitsio'),
    createFoodItem(foodImages[2], 'Gyro')
  ]
  const foodsPageRow2 = [
    createFoodItem(foodImages[3], 'Avgolemono'),
    createFoodItem(foodImages[4], 'Dolmades'),
    createFoodItem(foodImages[5], 'Saganaki')
  ]
  const foodsPageRow3 = [
    createFoodItem(foodImages[6], 'Spanakopita'),
    createFoodItem(foodImages[7], 'Lamb'),
    createFoodItem(foodImages[8], 'Tiropita')
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
};

const createImageElements = () => {
  const souvlaki = new Image();
  souvlaki.src = Souvlaki;
  const pastitsio = new Image();
  pastitsio.src = Pastitsio;
  const gyro = new Image();
  gyro.src = Gyro;
  const avgolemono = new Image();
  avgolemono.src = Avgolemono;
  const dolmades = new Image();
  dolmades.src = Dolmades;
  const saganaki = new Image();
  saganaki.src = Saganaki;
  const lamb = new Image();
  lamb.src = Lamb;
  const spanakopita = new Image();
  spanakopita.src = Spanakopita;
  const tiropita = new Image();
  tiropita.src = Tiropita;
  const imageElements = [
    souvlaki,
    pastitsio,
    gyro,
    avgolemono,
    dolmades,
    saganaki,
    spanakopita,
    lamb,
    tiropita
  ];
  return imageElements;
}

export default createFoodsPage;