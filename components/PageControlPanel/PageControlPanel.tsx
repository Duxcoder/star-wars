import cl from './PageControlPanel.module.css';
import BaseSelect from '@components/UI/BaseSelect/BaseSelect';
import { useRouter } from 'next/router';

const PageControlPanel = () => {
  const router = useRouter();
  const { pageSize, ...currentQuery } = router.query;

  const updatePerPage = (value: number) => {
    console.log(router.query);
    const newUrl = {
      pathname: router.pathname,
      query: { ...currentQuery, pageSize: value, page: 1 },
    };
    router.push(newUrl);
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
        value={+(pageSize || 400)}
        onChange={updatePerPage}
        label={'Show cards:'}
        options={getListCardsPerPage()}
      ></BaseSelect>
    </div>
  );
};

export default PageControlPanel;
