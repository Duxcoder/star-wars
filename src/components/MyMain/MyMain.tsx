import cl from './MyMain.module.css';
import MyCardList from '../MyCardList/MyCardList';
import Sword from '../Spinners/Sword';
import { CardAllCategory, MainProps } from '../../types';
import PageControlPanel from '../PageControlPanel/PageControlPanel';
import Pagination from '../Pagination/Pagination';
import MyCard from '../MyCard/MyCard';
import { useState } from 'react';

const MyMain = ({ title, cardsData, fetching, pages }: MainProps) => {
  const [selectedCard, setSelectedCard] = useState<CardAllCategory | null>(null);

  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
          <PageControlPanel fetching={fetching} />
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList} onClick={() => selectedCard && setSelectedCard(null)}>
            {fetching ? (
              <Sword />
            ) : (
              <MyCardList setSelectedCard={setSelectedCard} cards={cardsData} />
            )}
          </div>
          {selectedCard && (
            <div className={cl.sideCard}>
              <MyCard data={selectedCard} />
            </div>
          )}
        </div>
        {!fetching && pages && <Pagination pages={pages} />}
      </section>
    </main>
  );
};

export default MyMain;
