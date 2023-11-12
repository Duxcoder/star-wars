import BaseButton from '../UI/BaseButton/BaseButton';
import cl from './Pagination.module.css';
import {
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import { PaginationProps } from '../../types';
import { MouseEvent, useContext } from 'react';
import { RequestOptionsContext } from '../Context';
import { fillArray, limiter } from '../../utils/utils';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
const Pagination = ({ pages }: PaginationProps) => {
  const requestOptionsContext = useContext(RequestOptionsContext);
  const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
  const { currentPage, allPages } = requestOptionsData;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pathParams = useParams();
  const getPages = () => fillArray(pages, 1).map((page, i) => page + i);
  const selectPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      setPage(+e.target.value);
    }
  };

  const setPage = (page: number) => {
    if (setRequestOptionsData) {
      setRequestOptionsData({ ...requestOptionsData, currentPage: page });
      const { category, cardsPerPage, id } = pathParams;
      const searchText = searchParams.get('search');

      const detailsPart = id ? `/details/${id}` : '';
      const searchPart = searchText ? `?search=${searchText}` : '';
      const path = `/${category}/${cardsPerPage}/${page}${detailsPart}${searchPart}`;
      navigate(path);
    }
  };

  const getNextPage = () => {
    const { allPages, currentPage } = requestOptionsData;
    return limiter(currentPage + 1, 1, allPages);
  };

  const getPrevPage = () => {
    const { allPages, currentPage } = requestOptionsData;
    return limiter(currentPage - 1, 1, allPages);
  };

  return (
    <div className={cl.pagination} data-testid="pagination">
      <BaseButton circle callback={() => setPage(1)}>
        <RiArrowLeftDoubleLine />
      </BaseButton>
      <BaseButton circle callback={() => setPage(getPrevPage())}>
        <RiArrowLeftSLine />
      </BaseButton>
      {getPages().map((page: number) => (
        <BaseButton
          key={Math.random()}
          circle
          active={page === +currentPage}
          name={page}
          callback={selectPage}
        ></BaseButton>
      ))}
      <BaseButton circle callback={() => setPage(getNextPage())}>
        <RiArrowRightSLine />
      </BaseButton>
      <BaseButton circle callback={() => setPage(allPages)}>
        <RiArrowRightDoubleLine />
      </BaseButton>
    </div>
  );
};

export default Pagination;
