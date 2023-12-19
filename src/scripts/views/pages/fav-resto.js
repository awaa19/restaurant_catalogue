import FavoriteRestoDB from '../../../public/data/resto-fav-db';
import { createListRestoTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <div id ='empty-container'>
    </div>
    <div id="main-content">
    <article id="resto">
      <h2 id = 'title-fav'>Restaurant Favorite</h2>
      <div id="listResto" class="list-resto"></div>
      </article>
      </div>
  `;
  },

  async afterRender() {
    const restos = await FavoriteRestoDB.getAllResto();
    const restoContainer = document.querySelector('#listResto');

    restos.forEach((resto) => {
      restoContainer.innerHTML += createListRestoTemplate(resto);
    });
  },
};

export default Favorite;
