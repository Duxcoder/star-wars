import { useContext, useState } from 'react';
import cl from './PageControlPanel.module.css';
import MySelect from '../UI/MySelect/MySelect';
import { Categories, CATEGORIES, initialCategory } from '../../settings';
import { RequestOptionsContext } from '../Context';

const PageControlPanel = ({ fetching }: { fetching: boolean }) => {
  const [selectedOption, setSelectedOption] = useState<Categories>(initialCategory);
  const [selectedPerPage, setSelectedPerPage] = useState<number>(10);

  const requestOptionsContext = useContext(RequestOptionsContext);

  const updateCategory = (value: number | Categories) => {
    if (
      requestOptionsContext &&
      requestOptionsContext.requestOptionsData &&
      requestOptionsContext.setRequestOptionsData &&
      typeof value !== 'number'
    ) {
      const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
      setRequestOptionsData({ ...requestOptionsData, category: value, cardsPerPage: 10 });
      setSelectedOption(value);
      setSelectedPerPage(10);
    }
  };
  const updatePerPage = (value: number | Categories) => {
    if (
      requestOptionsContext &&
      requestOptionsContext.requestOptionsData &&
      requestOptionsContext.setRequestOptionsData &&
      typeof value === 'number'
    ) {
      const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
      setRequestOptionsData({ ...requestOptionsData, cardsPerPage: value });
      setSelectedPerPage(value);
    }
  };

  const getListCardsPerPage = () => {
    if (requestOptionsContext && requestOptionsContext.requestOptionsData) {
      const { requestOptionsData } = requestOptionsContext;
      const { allCount } = requestOptionsData;
      const listCardsPerPage = [];
      const ONE_PART = 10;
      const MAX_PART = 50;
      for (let i = 1; i <= Math.ceil(allCount / ONE_PART) && ONE_PART * i <= MAX_PART; i++) {
        listCardsPerPage.push(ONE_PART * i);
      }
      return listCardsPerPage;
    }
  };

  return (
    <div className={cl.pageControlPanel}>
      <MySelect
        value={selectedOption}
        onChange={updateCategory}
        label={'Category:'}
        options={CATEGORIES}
        disabled={fetching}
      ></MySelect>
      <MySelect
        value={selectedPerPage}
        onChange={updatePerPage}
        label={'Show cards:'}
        options={getListCardsPerPage()}
        disabled={fetching}
      ></MySelect>
    </div>
  );
};

export default PageControlPanel;
