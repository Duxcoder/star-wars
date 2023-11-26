import cl from './Content.module.css';
import { ContentProps } from '@myTypes/main';

const Content = ({ title, children }: ContentProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList}>{children}</div>
        </div>
      </section>
    </main>
  );
};

export default Content;
