import RestoranDataSource from '../../../public/data/resto-source';
import { createListRestoTemplate } from '../template/template-creator';

const Home = {
  async render() {
    return `
    <div id="jumbotron">
    <h2 class="jumbotron-title">Selamat Datang di Restauran Majar</h2>
    <p class="jumbotron-description">
      kami memiliki cabang restauran yang tersebar di berbagai daerah.
    </p>
    <a href="#main-content" class="btn">Lihat Restauran</a>
    </div>
    
    <div id="main-content">
    <article id="resto">
      <h2>Restauran Kami</h2>
      <div id="listResto" class="list-resto"></div>
      </article>
      </div>`;
  },

  async afterRender() {
    const listRestos = await RestoranDataSource.listResto();
    const restoElemen = document.querySelector('#listResto');
    listRestos.forEach((resto) => {
      restoElemen.innerHTML += createListRestoTemplate(resto);
    });
  },
};

export default Home;
