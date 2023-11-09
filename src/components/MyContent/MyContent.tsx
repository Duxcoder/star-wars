import { useEffect, useState } from 'react';
import { getCardsPages } from '../API/ApiService';
import { defaultRequestOptionsData } from '../../settings';
import MyHeader from '../MyHeader/MyHeader';
import MyMain from '../MyMain/MyMain';
import {
  CardAllCategory,
  CardsPages,
  LoaderContentType,
  ParamsType,
  RequestOptionsData,
} from '../../types';
import { RequestOptionsContext } from '../Context';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { checkNumber } from '../../utils/utils';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderContentType) {
  const { category, search, cardsPerPage, currentPage } = defaultRequestOptionsData;
  const options = {
    category: params.category ?? category,
    text: params.search ?? search,
    pages: checkNumber(params.cardsPerPage, cardsPerPage) / 10,
    startPage: checkNumber(params.page, currentPage),
  };
  const cardsPages = await getCardsPages(options);
  return { cardsPages, params };
}
const MyContent = () => {
  const [dataCards, setDataCards] = useState<CardAllCategory[]>([]);
  const [requestOptionsData, setRequestOptionsData] =
    useState<RequestOptionsData>(defaultRequestOptionsData);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const { cardsPerPage, category, allPages, allCount } = requestOptionsData;
  const cardsPagesData = useLoaderData() as { cardsPages: CardsPages; params: ParamsType };
  const { state } = useNavigation();

  const getContent = async () => {
    const { cardsPages, params } = cardsPagesData;
    const updateCardsPerPage = params.cardsPerPage || requestOptionsData.cardsPerPage;
    const updateCurrentPage = params.page || requestOptionsData.currentPage;
    setDataCards(cardsPages.data);

    const updateOptions = {
      allPages: Math.ceil(+cardsPages.allCount / +updateCardsPerPage),
      allCount: +cardsPages.allCount,
      cardsPerPage: checkNumber(params.cardsPerPage, +cardsPerPage),
      currentPage: +updateCurrentPage,
      search: params.search || '',
      category: params.category || requestOptionsData.category,
    };
    setRequestOptionsData({ ...updateOptions });
  };

  useEffect(() => setFetching(state === 'loading'), [state]);
  useEffect(() => {
    getContent().catch((err) => setError(err));
    if (error) throw new Error(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, cardsPagesData]);

  return (
    <RequestOptionsContext.Provider value={{ requestOptionsData, setRequestOptionsData }}>
      <MyHeader setError={setError} fetching={fetching} />
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
