import { API_SERVICE_URL, Categories } from '../../settings';
import { CardsPages } from '../../types';
import { fillArray } from '../../utils/utils';

export async function getData(query: string) {
  try {
    const response = await fetch(API_SERVICE_URL + query);
    const data = await response.json();
    const { count, results } = data;
    return count ? { data: results, allCount: count } : data;
  } catch (e) {
    if (typeof e === 'string') {
      throw new Error(e.toUpperCase());
    } else if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
}

export async function getSearchData(category: Categories | string, text: string, page: number = 1) {
  return await getData(`${category}/?search=${text}&page=${page}`);
}

export async function getCardsPages({
  category,
  text,
  pages = 1,
  startPage = 1,
}: {
  category: Categories | string;
  text: string;
  pages: number;
  startPage: number;
}) {
  const requests = fillArray(pages, 0).map((num, i) =>
    getSearchData(category, text, startPage + num + i)
  );
  const responses = await Promise.all(requests);

  const cardsPages: CardsPages = { data: [], allCount: 0 };
  responses.forEach((response) => {
    if (response.data) {
      cardsPages.data = [...cardsPages.data, ...response.data];
      cardsPages.allCount = response.allCount;
    }
  });
  return cardsPages;
}
