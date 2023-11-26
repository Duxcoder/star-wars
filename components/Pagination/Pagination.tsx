import BaseButton from '../UI/BaseButton/BaseButton';
import {
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import cl from './Pagination.module.css';

import { PaginationProps } from '@myTypes/main';
import { MouseEvent } from 'react';

import { fillArray, limiter } from '../../utils/utils';
import { useRouter } from 'next/router';

const Pagination = ({ pages }: PaginationProps) => {
  const router = useRouter();
  const { page, ...currentQuery } = router.query;

  const getPages = () => fillArray(pages, 1).map((page, i) => page + i);

  const selectPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      setPage(+e.target.value);
    }
  };

  const setPage = (setNumberPage: number) => {
    const newUrl = {
      pathname: router.pathname,
      query: { ...currentQuery, page: setNumberPage },
    };
    router.push(newUrl);
  };

  const getNextPage = () => {
    return limiter(+(page ?? 1) + 1, 1, pages);
  };

  const getPrevPage = () => {
    return limiter(+(page ?? 1) - 1, 1, pages);
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
          key={Math.random()}
          circle
          active={numPage === +(router.query.page ?? 1)}
          name={numPage}
          callback={selectPage}
        ></BaseButton>
      ))}
      <BaseButton circle callback={() => setPage(getNextPage())}>
        <RiArrowRightSLine />
      </BaseButton>
      <BaseButton circle callback={() => setPage(pages)}>
        <RiArrowRightDoubleLine />
      </BaseButton>
    </div>
  );
};

export default Pagination;
