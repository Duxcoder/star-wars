import cl from './MyCardList.module.css';
import { CardListProps } from '../../types';
import MyCard from '../MyCard/MyCard';
import { RiFileExcelLine } from 'react-icons/ri';

const MyCardList = ({ cards }: CardListProps) => {
  const renderCards = () => cards.map((card, i) => <MyCard key={i} data={card} />);
  const renderNotFound = () => {
    return (
      <span className={cl.noResult}>
        <RiFileExcelLine />
        {'No results found...'}
      </span>
    );
  };

  return <div className={cl.cardList}>{cards.length ? renderCards() : renderNotFound()}</div>;
};

export default MyCardList;
