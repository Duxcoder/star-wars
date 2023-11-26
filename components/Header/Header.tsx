import BaseInput from '../UI/BaseInput/BaseInput';
import BaseButton from '../UI/BaseButton/BaseButton';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import cl from './Header.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const logoFont = M_PLUS_Rounded_1c({
  style: 'normal',
  weight: '900',
  subsets: ['cyrillic'],
});

const Header = () => {
  const router = useRouter();
  const { name, ...currentQuery } = router.query;
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState(name?.toString() || '');

  useEffect(() => {
    if (error) throw new Error(error);
  }, [error]);

  const runSearch = () => {
    const newUrl = {
      pathname: router.pathname,
      query: { ...currentQuery, pageSize: 400, page: 1, name: searchText },
    };
    router.push(newUrl);
  };

  return (
    <header className={cl.header}>
      <div className={[cl.container, 'container'].join(' ')}>
        <Link href="/" className={cl.logo}>
          <span className={[logoFont.className, cl.logoName].join(' ')}>{'DISNEY CARDS'}</span>
        </Link>
        <div className={cl.searchContainer}>
          <BaseInput
            type={'search'}
            placeholder={'Find anything...'}
            value={searchText}
            callback={setSearchText}
          />
          <BaseButton name={'Search'} callback={runSearch}>
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
