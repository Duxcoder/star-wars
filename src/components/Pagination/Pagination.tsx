import BaseButton from '../UI/BaseButton/BaseButton';
import {
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import { fillArray, limiter } from '../../utils/utils';
import cl from './Pagination.module.css';

import { PaginationProps } from '../../types';

import { MouseEvent } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

const Pagination = ({ pages }: PaginationProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pathParams = useParams();
  const { countPages } = useAppSelector((state) => state.reduxReducer);
  const { page } = pathParams;

  const getPages = () => fillArray(pages, 1).map((page, i) => page + i);
  const selectPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      setPage(+e.target.value);
    }
  };

  const setPage = (page: number) => {
    const { category, cardsPerPage, id } = pathParams;
    const searchText = searchParams.get('search');

    const detailsPart = id ? `/details/${id}` : '';
    const searchPart = searchText ? `?search=${searchText}` : '';
    const path = `/${category}/${cardsPerPage}/${page}${detailsPart}${searchPart}`;
    navigate(path);
  };

  const getNextPage = () => {
    return limiter(+(page ?? 1) + 1, 1, countPages);
  };

  const getPrevPage = () => {
    return limiter(+(page ?? 1) - 1, 1, countPages);
  };

  return (
    <div className={cl.pagination} data-testid="pagination">
      <BaseButton circle callback={() => setPage(1)}>
        <RiArrowLeftDoubleLine />
      </BaseButton>
      <BaseButton circle callback={() => setPage(getPrevPage())}>
        <RiArrowLeftSLine />
      </BaseButton>
      {getPages().map((numPage: number) => (
        <BaseButton
          key={numPage}
          circle
          active={numPage === +(page ?? 1)}
          name={numPage}
          callback={selectPage}
        ></BaseButton>
      ))}
      <BaseButton circle callback={() => setPage(getNextPage())}>
        <RiArrowRightSLine />
      </BaseButton>
      <BaseButton circle callback={() => setPage(countPages)}>
        <RiArrowRightDoubleLine />
      </BaseButton>
    </div>
  );
};

export default Pagination;
