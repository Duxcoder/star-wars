import axios from 'axios';
import { API_SERVICE_URL } from '../../settings';
import { CardsPages } from '../../types';

export async function getData(query: string) {
  try {
    const response = await axios.get(API_SERVICE_URL + query);
    return response.data.count
      ? { data: response.data.results, allCount: response.data.count }
      : null;
  } catch (e) {
    if (typeof e === 'string') {
      throw new Error(e.toUpperCase());
    } else if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}

export async function getSearchData(category: string, text: string, page: number = 1) {
  return await getData(`${category}/?search=${text}&page=${page}`);
}

export async function getCardsPages(
  category: string,
  text: string,
  pages: number = 1,
  startPage: number = 1
) {
  const requests = new Array(pages)
    .fill(0)
    .map((num, i) => getSearchData(category, text, startPage + num + i));
  const responses = await Promise.all(requests);

  const cardsPages: CardsPages = { data: [], allCount: 0 };
  responses.forEach((response) => {
    if (response) {
      cardsPages.data = [...cardsPages.data, ...response.data];
      cardsPages.allCount = response.allCount;
    }
  });
  return cardsPages;
}
