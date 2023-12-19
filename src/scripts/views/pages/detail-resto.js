import UrlParser from '../../routes/url-parse';
import RestoranDataSource from '../../../public/data/resto-source';
import { createDetailRestoTemplate } from '../template/template-creator';
import likeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `<div id="detail-resto" class="resto"></div>
    <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoranDataSource.detailResto(url.id);
    const restoDetail = document.querySelector('#detail-resto');

    restoDetail.innerHTML = createDetailRestoTemplate(resto);

    likeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
        address: resto.address,
      },
    });
  },
};
export default Detail;
