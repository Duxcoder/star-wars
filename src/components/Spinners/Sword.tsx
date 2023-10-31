import cl from './Sword.module.css';
import hilt from '../../assets/images/hilt.svg';

const Sword = () => {
  return (
    <div className={cl.spinner}>
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
