import CardList from '../CardList/CardList';
import Sword from '../Spinners/Sword';
import PageControlPanel from '../PageControlPanel/PageControlPanel';
import Pagination from '../Pagination/Pagination';
import cl from './Main.module.css';

import { MainProps } from '../../types';

import { Outlet, useParams } from 'react-router-dom';

const Main = ({ title, cardsData, fetching, pages }: MainProps) => {
  const { id } = useParams();
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
          <PageControlPanel fetching={fetching} />
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList}>{fetching ? <Sword /> : <CardList cards={cardsData} />}</div>
          {id ? (
            <div className={cl.sideCard}>
              <Outlet />
            </div>
          ) : null}
        </div>
        {!fetching && <Pagination pages={pages} />}
      </section>
    </main>
  );
};

export default Main;
