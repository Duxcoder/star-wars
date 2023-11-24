import cl from './Content.module.css';
import { ContentProps } from '../../@types';
import CardList from '../CardList/CardList';

const Content = ({ title, cards }: ContentProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList}>
            <CardList cards={cards} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
