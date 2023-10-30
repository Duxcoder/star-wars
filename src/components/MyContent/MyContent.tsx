import { useEffect, useState } from 'react';
import ApiService from '../API/ApiService';
import { LocalStorage } from '../../settings';
import MyHeader from '../MyHeader/MyHeader';
import MyMain from '../MyMain/MyMain';

const MyContent = () => {
  const [dataCards, setDataCards] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');

  const getContent = async (searchText: string) => {
    setFetching(true);
    localStorage.setItem(LocalStorage.searchText, searchText);
    const data = await ApiService.getSearchAllData(searchText);
    setFetching(false);
    setDataCards(data);
  };

  useEffect(() => {
    getContent(localStorage.getItem(LocalStorage.searchText) ?? '').catch((err) => setError(err));
    if (error) throw new Error(error);
  }, [error]);

  return (
    <>
      <MyHeader setError={setError} getContent={getContent} fetching={fetching} />
      <MyMain cardsData={dataCards} fetching={fetching} />
    </>
  );
};

export default MyContent;
