import { useState } from 'react';
import cl from './MyHeader.module.css';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import { LocalStorage } from '../../settings';
import { HeaderProps } from '../../types';

const MyHeader = ({ setError, getContent, fetching }: HeaderProps) => {
  const [searchText, setSearchText] = useState(localStorage.getItem(LocalStorage.searchText) ?? '');

  return (
    <header className={cl.header}>
      <div className={[cl.container, 'container'].join(' ')}>
        <a href="./" className={cl.logo}>
          <span className={cl.logoName}>{'Star Wars'}</span>
        </a>
        <div className={cl.searchContainer}>
          <MyInput
            value={searchText}
            disabled={fetching}
            type={'search'}
            placeholder={'Find anything...'}
            callback={setSearchText}
          />
          <MyButton disabled={fetching} name={'Search'} callback={() => getContent(searchText)}>
            <RiSearch2Line />
          </MyButton>
          <MyButton name={'Error'} callback={() => setError('Oops! This is fatal error')}>
            <RiErrorWarningLine />
          </MyButton>
        </div>
      </div>
    </header>
  );
};
export default MyHeader;
