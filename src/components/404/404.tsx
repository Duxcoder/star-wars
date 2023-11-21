import cl from './404.module.css';
import BaseButton from '../UI/BaseButton/BaseButton';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={cl.container}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for might be in another galaxy.</p>
      <Link to="./">
        <BaseButton>Go home</BaseButton>
      </Link>
    </div>
  );
};

export default NotFoundPage;
