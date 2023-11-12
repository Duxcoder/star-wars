import cl from './MyMain.module.css';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import { MainProps } from '../../types';
import PageControlPanel from '../PageControlPanel/PageControlPanel';
import Pagination from '../Pagination/Pagination';
import { Outlet, useParams } from 'react-router-dom';

const MyMain = ({ title, cardsData, fetching, pages }: MainProps) => {
  const { id } = useParams();
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
          <PageControlPanel fetching={fetching} />
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList}>
            {fetching ? <Sword /> : <MyCardList cards={cardsData} />}
          </div>
          {id ? (
            <div className={cl.sideCard}>
              <Outlet />
            </div>
          ) : null}
        </div>
        {!fetching && pages && <Pagination pages={pages} />}
      </section>
    </main>
  );
};

export default MyMain;
