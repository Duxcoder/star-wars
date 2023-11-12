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
