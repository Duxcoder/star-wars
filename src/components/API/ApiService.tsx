import axios from 'axios';
import { API_SERVICE_URL, CATEGORIES } from '../../settings';

export async function getData(query: string) {
  try {
    const response = await axios.get(API_SERVICE_URL + query);
    return response.data.count ? response.data.results : [];
  } catch (e) {
    if (typeof e === 'string') {
      throw new Error(e.toUpperCase());
    } else if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}
export async function getSearchData(category: string, text: string) {
  return await getData(`${category}/?search=${text}`);
}
export async function getSearchAllData(text: string) {
  const requests = CATEGORIES.map((category) => getSearchData(category, text));
  const responses = await Promise.all(requests);
  return responses.reduce((result, response) => [...response, ...result], []);
}
