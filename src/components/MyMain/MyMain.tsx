import cl from './MyMain.module.css';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import { MainProps } from '../../types';

const MyMain = ({ cardsData, fetching }: MainProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <h1 className={cl.title}> {'Star Wars'} </h1>
        {fetching ? <Sword /> : <MyCardList cards={cardsData} />}
      </section>
    </main>
  );
};

export default MyMain;
