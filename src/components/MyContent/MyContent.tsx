import { useEffect, useState } from 'react';
import { getCardsPages } from '../API/ApiService';
import { defaultRequestOptionsData, LocalStorage } from '../../settings';
import MyHeader from '../MyHeader/MyHeader';
import MyMain from '../MyMain/MyMain';
import { CardAllCategory, RequestOptionsData } from '../../types';
import { RequestOptionsContext } from '../Context';

const MyContent = () => {
  const [dataCards, setDataCards] = useState<CardAllCategory[]>([]);
  const [requestOptionsData, setRequestOptionsData] =
    useState<RequestOptionsData>(defaultRequestOptionsData);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const { cardsPerPage, currentPage, category, allPages, allCount } = requestOptionsData;

  const updateRequestOptionsData = (
    allCount: number,
    cardsPerPage: number,
    currentPage: number
  ) => {
    setRequestOptionsData({
      ...requestOptionsData,
      allPages: Math.ceil(allCount / cardsPerPage),
      allCount,
      cardsPerPage,
      currentPage,
    });
  };

  const getContent = async (searchText: string, newSearch = false) => {
    setFetching(true);
    localStorage.setItem(LocalStorage.searchText, searchText);
    const updateCardsPerPage = newSearch ? 10 : cardsPerPage;
    const updateCurrentPage = newSearch ? 1 : currentPage;
    const cardsPages = await getCardsPages(
      category,
      searchText,
      updateCardsPerPage / 10,
      updateCurrentPage
    );
    setFetching(false);
    setDataCards(cardsPages.data);
    updateRequestOptionsData(cardsPages.allCount, updateCardsPerPage, updateCurrentPage);
  };

  useEffect(() => {
    getContent(localStorage.getItem(LocalStorage.searchText) ?? '').catch((err) => setError(err));
    if (error) throw new Error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, cardsPerPage, category, currentPage]);

  return (
    <RequestOptionsContext.Provider value={{ requestOptionsData, setRequestOptionsData }}>
      <MyHeader setError={setError} getContent={getContent} fetching={fetching} />
      <MyMain
        title={`${category} (${allCount})`}
        cardsData={dataCards}
        fetching={fetching}
        pages={allPages}
      />
    </RequestOptionsContext.Provider>
  );
};

export default MyContent;
