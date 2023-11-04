import cl from './MyMain.module.css';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import { MainProps } from '../../types';
import PageControlPanel from '../PageControlPanel/PageControlPanel';
import Pagination from '../Pagination/Pagination';

const MyMain = ({ title, cardsData, fetching, pages }: MainProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
          <PageControlPanel fetching={fetching} />
        </div>
        {fetching ? <Sword /> : <MyCardList cards={cardsData} />}
        {!fetching && pages && <Pagination pages={pages} />}
      </section>
    </main>
  );
};

export default MyMain;
