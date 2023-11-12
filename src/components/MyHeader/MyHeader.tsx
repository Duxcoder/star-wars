import { useContext } from 'react';
import cl from './MyHeader.module.css';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import { HeaderProps } from '../../types';
import { RequestOptionsContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const MyHeader = ({ setError, fetching }: HeaderProps) => {
  const requestOptionsContext = useContext(RequestOptionsContext);
  const { requestOptionsData, setRequestOptionsData } = requestOptionsContext;
  const navigate = useNavigate();

  const setSearchText = (search: string) => {
    if (setRequestOptionsData) setRequestOptionsData((prev) => ({ ...prev, search }));
  };
  const startSearch = async () => {
    const { category, search } = requestOptionsData;
    navigate(`/${category}/10/1${search ? `?search=${search}` : ''}`);
  };
  return (
    <header className={cl.header}>
      <div className={[cl.container, 'container'].join(' ')}>
        <a href="/" className={cl.logo}>
          <span className={cl.logoName}>{'Star Wars'}</span>
        </a>
        <div className={cl.searchContainer}>
          <MyInput
            value={requestOptionsData.search}
            disabled={fetching}
            type={'search'}
            placeholder={'Find anything...'}
            callback={setSearchText}
          />
          <MyButton disabled={fetching} name={'Search'} callback={startSearch}>
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
