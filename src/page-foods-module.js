import {createFoodItem, createFoodDisplay} from "./food-items-module";
import {createBlockSpacer} from "./block-spacer-module";

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
};

export default createFoodsPage;