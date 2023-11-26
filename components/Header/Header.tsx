'use client';

import BaseInput from '../UI/BaseInput/BaseInput';
import BaseButton from '../UI/BaseButton/BaseButton';
import { RiSearch2Line, RiErrorWarningLine } from 'react-icons/ri';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import cl from './Header.module.css';

import { HeaderProps } from '@myTypes/main';
import Link from 'next/link';

const logoFont = M_PLUS_Rounded_1c({
  style: 'normal',
  weight: '900',
  subsets: ['cyrillic'],
});

const Header = ({ setError }: HeaderProps) => {
  return (
    <header className={cl.header}>
      <div className={[cl.container, 'container'].join(' ')}>
        <Link href="/" className={cl.logo}>
          <span className={[logoFont.className, cl.logoName].join(' ')}>{'DISNAY CARDS'}</span>
        </Link>
        <div className={cl.searchContainer}>
          <BaseInput type={'search'} placeholder={'Find anything...'} />
          <BaseButton name={'Search'}>
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
