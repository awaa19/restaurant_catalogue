import Detail from '../views/pages/detail-resto';
import Favorite from '../views/pages/fav-resto';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
