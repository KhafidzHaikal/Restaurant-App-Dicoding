import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDB {
  static async RestaurantsAll() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const dataDetail = await response.json();
    return dataDetail;
  }
}

export default TheRestoDB;
