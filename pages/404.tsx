import cl from './404.module.css';

const NotFoundPage = () => {
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>404 Not Found</h1>
      <p className={cl.paragraph}>
        Sorry, the page you are looking for might be in another galaxy.
      </p>
    </div>
  );
};

export default NotFoundPage;
