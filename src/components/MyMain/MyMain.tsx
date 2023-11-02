import cl from './MyMain.module.css';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import { MainProps } from '../../types';
import PageControlPanel from '../PageControlPanel/PageControlPanel';

const MyMain = ({ cardsData, fetching }: MainProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {'Star Wars'}</h1>
          <PageControlPanel fetching={fetching} />
        </div>
        {fetching ? <Sword /> : <MyCardList cards={cardsData} />}
      </section>
    </main>
  );
};

export default MyMain;
