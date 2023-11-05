import MyButton from '../UI/MyButton/MyButton';
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
import { useNavigate } from 'react-router-dom';
const Pagination = ({ pages }: PaginationProps) => {
  const requestOptionsContext = useContext(RequestOptionsContext);
  const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
  const { currentPage, allPages, category, cardsPerPage, search } = requestOptionsData;
  const navigate = useNavigate();
  const getPages = () => fillArray(pages, 1).map((page, i) => page + i);
  const selectPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      setPage(+e.target.value);
    }
  };

  const setPage = (page: number) => {
    if (setRequestOptionsData) {
      setRequestOptionsData({ ...requestOptionsData, currentPage: page });
      navigate(`/${category}/${cardsPerPage}/${page}${search ? '/' + search : ''}`);
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
    <div className={cl.pagination}>
      <MyButton circle callback={() => setPage(1)}>
        <RiArrowLeftDoubleLine />
      </MyButton>
      <MyButton circle callback={() => setPage(getPrevPage())}>
        <RiArrowLeftSLine />
      </MyButton>
      {getPages().map((page: number) => (
        <MyButton
          key={Math.random()}
          circle
          active={page === +currentPage}
          name={page}
          callback={selectPage}
        ></MyButton>
      ))}
      <MyButton circle callback={() => setPage(getNextPage())}>
        <RiArrowRightSLine />
      </MyButton>
      <MyButton circle callback={() => setPage(allPages)}>
        <RiArrowRightDoubleLine />
      </MyButton>
    </div>
  );
};

export default Pagination;
