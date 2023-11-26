import Pagination from '@components/Pagination/Pagination';
import PageControlPanel from '@components/PageControlPanel/PageControlPanel';
import cl from './Content.module.css';

import { ContentProps } from '@myTypes/main';

const Content = ({ title, children, pages }: ContentProps) => {
  return (
    <main className={cl.main}>
      <section className="container">
        <div className={cl.topMain}>
          <h1 className={cl.title}> {title}</h1>
          <PageControlPanel />
        </div>
        <div className={cl.cardContent}>
          <div className={cl.sideList}>{children}</div>
          <Pagination pages={pages} />
        </div>
      </section>
    </main>
  );
};

export default Content;
