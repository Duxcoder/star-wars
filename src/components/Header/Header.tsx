import BaseInput from '../UI/BaseInput/BaseInput';
import BaseButton from '../UI/BaseButton/BaseButton';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import cl from './Header.module.css';

import { HeaderProps } from '../../types';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppActions, useAppSelector } from '../../hooks/redux';

const Header = ({ setError, fetching }: HeaderProps) => {
  const { textSearch } = useAppSelector((state) => state.reduxReducer);
  const { setTextSearch } = useAppActions();
  const { category } = useParams();

  const navigate = useNavigate();
  const startSearch = async () => {
    navigate(`/${category}/400/1${textSearch ? `?search=${textSearch}` : ''}`);
  };
  return (
    <header className={cl.header}>
      <div className={[cl.container, 'container'].join(' ')}>
        <a href="/" className={cl.logo}>
          <span className={cl.logoName}>{'DISNAY CARDS'}</span>
        </a>
        <div className={cl.searchContainer}>
          <BaseInput
            value={textSearch}
            disabled={fetching}
            type={'search'}
            placeholder={'Find anything...'}
            callback={(value) => setTextSearch(value)}
          />
          <BaseButton disabled={fetching} name={'Search'} callback={startSearch}>
            <RiSearch2Line />
          </BaseButton>
          <BaseButton name={'Error'} callback={() => setError('Oops! This is fatal error')}>
            <RiErrorWarningLine />
          </BaseButton>
        </div>
      </div>
    </header>
  );
};
export default Header;
