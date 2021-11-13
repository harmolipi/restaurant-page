const createFoodItem = (picture, label) => {
  const parentTile = document.createElement('div');
  parentTile.classList.add('tile', 'is-parent', 'is-4');
  const childTile = document.createElement('div');
  childTile.classList.add('tile', 'is-child', 'card');
  const foodCardImageContainer = document.createElement('div');
  foodCardImageContainer.classList.add('card-image');
  const foodImageContainer = document.createElement('figure');
  foodImageContainer.classList.add('image', 'is-4by3');
  const foodImage = picture;
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
};

const createFoodDisplay = (foodItems) => {
  const foodDisplay = document.createElement('div');
  foodDisplay.classList.add('container', 'block');
  const foodDisplaySection = document.createElement('section');
  foodDisplaySection.classList.add('food', 'tile', 'is-ancestor');
  
  foodDisplay.appendChild(foodDisplaySection);
  foodItems.forEach(food => foodDisplaySection.appendChild(food));
  return foodDisplay;
};

export {
  createFoodDisplay,
  createFoodItem
};