import BaseSelect from '../UI/BaseSelect/BaseSelect';
import cl from './PageControlPanel.module.css';

import { Categories, CATEGORIES, initialCategory } from '../../settings';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const PageControlPanel = ({ fetching }: { fetching: boolean }) => {
  const navigate = useNavigate();
  const pathParams = useParams();
  const [searchParams] = useSearchParams();

  const updateCategory = (value: number | Categories) => {
    const searchText = searchParams.get('search');
    const searchPart = searchText ? `?search=${searchText}` : '';
    navigate(`/${value}/10/1${searchPart}`);
  };

  const updatePerPage = (value: number | Categories) => {
    const searchText = searchParams.get('search');
    const { category, id } = pathParams;
    const detailsPart = id ? `/details/${id}` : '';
    const searchPart = searchText ? `?search=${searchText}` : '';
    navigate(`/${category}/${value}/1${detailsPart}${searchPart}`);
  };

  const getListCardsPerPage = () => {
    const listCardsPerPage = [];
    const ONE_PART = 400;
    const MAX_PART = 1600;
    for (let i = 1; ONE_PART * i <= MAX_PART; i++) {
      listCardsPerPage.push(ONE_PART * i);
    }
    return listCardsPerPage;
  };

  return (
    <div className={cl.pageControlPanel}>
      <BaseSelect
        value={pathParams.category ?? initialCategory}
        onChange={updateCategory}
        label={'Category:'}
        options={CATEGORIES}
        disabled={fetching}
      ></BaseSelect>
      <BaseSelect
        value={pathParams.cardsPerPage ?? 40}
        onChange={updatePerPage}
        label={'Show cards:'}
        options={getListCardsPerPage()}
        disabled={fetching || !getListCardsPerPage().length}
      ></BaseSelect>
    </div>
  );
};

export default PageControlPanel;
