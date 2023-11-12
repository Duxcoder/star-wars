import { useContext } from 'react';
import cl from './PageControlPanel.module.css';
import MySelect from '../UI/MySelect/MySelect';
import { Categories, CATEGORIES } from '../../settings';
import { RequestOptionsContext } from '../Context';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const PageControlPanel = ({ fetching }: { fetching: boolean }) => {
  const requestOptionsContext = useContext(RequestOptionsContext);
  const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
  const { category, cardsPerPage } = requestOptionsData;
  const navigate = useNavigate();
  const pathParams = useParams();
  const [searchParams] = useSearchParams();

  const updateCategory = (value: number | Categories) => {
    if (setRequestOptionsData && typeof value !== 'number') {
      setRequestOptionsData({
        ...requestOptionsData,
        category: value,
        cardsPerPage: 10,
        currentPage: 1,
      });
      const searchText = searchParams.get('search');
      const searchPart = searchText ? `?search=${searchText}` : '';
      navigate(`/${value}/10/1${searchPart}`);
    }
  };

  const updatePerPage = (value: number | Categories) => {
    if (setRequestOptionsData && typeof value === 'number') {
      setRequestOptionsData({
        ...requestOptionsData,
        cardsPerPage: value,
        currentPage: 1,
      });
      const searchText = searchParams.get('search');
      const { category, id } = pathParams;
      const detailsPart = id ? `/details/${id}` : '';
      const searchPart = searchText ? `?search=${searchText}` : '';
      navigate(`/${category}/${value}/1${detailsPart}${searchPart}`);
    }
  };

  const getListCardsPerPage = () => {
    const { allCount } = requestOptionsData;
    const listCardsPerPage = [];
    const ONE_PART = 10;
    const MAX_PART = 50;
    for (let i = 1; i <= Math.ceil(allCount / ONE_PART) && ONE_PART * i <= MAX_PART; i++) {
      listCardsPerPage.push(ONE_PART * i);
    }
    return listCardsPerPage;
  };

  return (
    <div className={cl.pageControlPanel}>
      <MySelect
        value={category}
        onChange={updateCategory}
        label={'Category:'}
        options={CATEGORIES}
        disabled={fetching}
      ></MySelect>
      <MySelect
        value={cardsPerPage}
        onChange={updatePerPage}
        label={'Show cards:'}
        options={getListCardsPerPage()}
        disabled={fetching || !getListCardsPerPage().length}
      ></MySelect>
    </div>
  );
};

export default PageControlPanel;
