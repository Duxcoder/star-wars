import Image from 'next/image';
import cl from './Sword.module.css';

import classNames from 'classnames/bind';
const Sword = ({ red }: { red?: boolean }) => {
  const cx = classNames.bind(cl);
  const className = cx({
    spinner: true,
    red,
  });
  return (
    <div className={className} data-testid="loading-spinner">
      <div className={cl.sword}>
        <Image src="/hilt.svg" width={20} height={80} alt="Sword loading" className={cl.hilt} />
        <div className={cl.blade}>
          <div className={cl.light}></div>
        </div>
      </div>
      <span className={cl.text}>LOADING...</span>
    </div>
  );
};

export default Sword;
