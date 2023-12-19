import CONFIG from '../../scripts/global/config';

class RestoranDataSource {
  static async listResto() {
    const response = await fetch(`${CONFIG.BASE_URL}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
    const responsJson = await response.json();
    return responsJson.restaurant;
  }
}

export default RestoranDataSource;
