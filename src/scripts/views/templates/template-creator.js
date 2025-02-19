import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const categories = restaurant.categories?.map((category) => category.name).join(', ') || 'No categories available';
  const foods = restaurant.menus?.foods?.map((food) => `<li>${food.name}</li>`).join('') || '<li>No foods available</li>';
  const drinks = restaurant.menus?.drinks?.map((drink) => `<li>${drink.name}</li>`).join('') || '<li>No drinks available</li>';

  return `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      
      <h4>Address</h4>
      <p>${restaurant.address || 'No address available'}, ${restaurant.city || 'No city available'}</p>
      <h4>Rating</h4>
      <p>⭐️ ${restaurant.rating || 'No rating available'}</p>
      <h4>Categories</h4>
      <p>${categories}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Description</h3>
      <p>${restaurant.description || 'No description available'}</p>
    </div>
    <div class="restaurant__menu">
      <h3>Menu</h3>
      <div class="menu__food">
        <h4>Foods</h4>
        <ul>${foods}</ul>
      </div>
      <div class="menu__drink">
        <h4>Drinks</h4>
        <ul>${drinks}</ul>
      </div>
    </div>
  `;
};


const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
