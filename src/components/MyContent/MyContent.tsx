import { useEffect, useState } from 'react';
import { getCardsPages } from '../API/ApiService';
import { Categories, initialCategory, LocalStorage } from '../../settings';
import MyHeader from '../MyHeader/MyHeader';
import MyMain from '../MyMain/MyMain';
import { CardAllCategory, RequestOptionsData } from '../../types';
import { RequestOptionsContext } from '../Context';

const defaultRequestOptionsData = {
  allCount: 0,
  allPages: 0,
  currentPage: 1,
  cardsPerPage: 10,
  category: initialCategory,
};

const MyContent = () => {
  const [dataCards, setDataCards] = useState<CardAllCategory[]>([]);
  const [requestOptionsData, setRequestOptionsData] = useState<RequestOptionsData | null>(
    defaultRequestOptionsData
  );
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');

  const updateRequestOptionsData = (allCount: number) => {
    console.log(requestOptionsData);
    if (requestOptionsData) {
      setRequestOptionsData({
        ...requestOptionsData,
        allCount: allCount,
        allPages: Math.ceil(allCount / 10),
      });
    }
  };
  const getContent = async (
    searchText: string,
    category: Categories = initialCategory,
    pages?: number,
    startPage?: number
  ) => {
    setFetching(true);
    localStorage.setItem(LocalStorage.searchText, searchText);
    const { data, allCount } = await getCardsPages(category, searchText, pages, startPage);
    setFetching(false);
    setDataCards(data);
    updateRequestOptionsData(allCount);
  };
  useEffect(() => {
    if (requestOptionsData) {
      getContent(
        localStorage.getItem(LocalStorage.searchText) ?? '',
        requestOptionsData.category,
        (requestOptionsData?.cardsPerPage || 10) / 10,
        1
      );
    }
  }, [requestOptionsData?.cardsPerPage, requestOptionsData?.category]);

  useEffect(() => {
    getContent(localStorage.getItem(LocalStorage.searchText) ?? '').catch((err) => setError(err));
    if (error) throw new Error(error);
  }, [error]);

  return (
    <RequestOptionsContext.Provider value={{ requestOptionsData, setRequestOptionsData }}>
      <MyHeader setError={setError} getContent={getContent} fetching={fetching} />
      <MyMain cardsData={dataCards} fetching={fetching} />
    </RequestOptionsContext.Provider>
  );
};

export default MyContent;
