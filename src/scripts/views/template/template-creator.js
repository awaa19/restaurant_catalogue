import CONFIG from '../../global/config';

const createListRestoTemplate = (
  resto
) => `<div class="card-resto" tabindex="0">
<img class = "resto-img" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${
  resto.name
}" crossorigin="anonymous" />
  <a href="#/detail/${resto.id}"> <h2 class ="resto-name"> ${
  resto.name
}</h2></a>
    <h3>${resto.city} - ${
  resto.rating
}/5 <span style="color: rgb(255, 217, 0);">&#9733</span></h3>
</div>`;

const createDetailRestoTemplate = (resto) => `
<div class ='resto-img' tabindex="0">
<img src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${
  resto.name
}" crossorigin="anonymous"/>
</div>

<div class ='detail-text'>
<h2 class="resto-name" tabindex="0">${resto.name}</h2>
<p tabindex="0"> Location : ${resto.address}, ${resto.city}</p>
<p tabindex="0"> Rating : ${
  resto.rating
}/5 <span style="color: rgb(255, 217, 0);">&#9733</span></p>
  <div class="resto-desc" tabindex="0">
<p>${resto.description}</p>
</div>

<div class = 'menu-content'>
 <div class= 'menu-makan'>
  <h3 tabindex="0">Menu Makanan</h3 >
  <ul>
  ${resto.menus.foods
    .map((food) => `<li tabindex="0">${food.name}</li>`)
    .join('')}
  </ul>
 </div>
 <div class= 'menu-minum'>
  <h3 tabindex="0">Menu Minuman</h3>
  <ul>
  ${resto.menus.drinks
    .map((drink) => `<li tabindex="0">${drink.name}</li>`)
    .join('')}
  </ul>
 </div>
</div>

<div class = 'review-content'>
  <div class='review'>
    <h3 tabindex="0">Review Restoran</h3>
    <ul class = 'review-resto' >
    ${resto.customerReviews
      .map(
        (review) => `
          <li tabindex="0">
            <strong>${review.name}</strong> - ${review.date}<br>
            ${review.review}
          </li>`
      )
      .join('')}
        </ul>
    </div>
</div>

</div>`;

const createLikeButtonTemplate =
  () => `<button aria-label="like this resto" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

const createLikedButtonTemplate =
  () => `<button aria-label="unlike this movie" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>`;

export {
  createListRestoTemplate,
  createDetailRestoTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
