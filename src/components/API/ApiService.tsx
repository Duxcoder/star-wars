import axios from 'axios';
import { API_SERVICE_URL, CATEGORIES } from '../../settings';

export default class ApiService {
  static async getData(query: string) {
    try {
      const response = await axios.get(API_SERVICE_URL + query);
      return response.data.count ? response.data.results : [];
    } catch (error) {
      console.error(error);
    }
  }
  static async getSearchData(category: string, text: string) {
    return await this.getData(`${category}/?search=${text}`);
  }
  static async getSearchAllData(text: string) {
    const requests = CATEGORIES.map((category) => this.getSearchData(category, text));
    const responses = await Promise.all(requests);
    return responses.reduce((result, response) => [...response, ...result], []);
  }
}
