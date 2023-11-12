import cl from './Sword.module.css';
import hilt from '../../assets/images/hilt.svg';
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
        <img src={hilt} alt="Sword loading" className={cl.hilt}></img>
        <div className={cl.blade}>
          <div className={cl.light}></div>
        </div>
      </div>
      <span className={cl.text}>LOADING...</span>
    </div>
  );
};

export default Sword;
