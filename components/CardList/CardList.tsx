import Card from '../Card/Card';
import { RiFileExcelLine } from 'react-icons/ri';
import cl from './CardList.module.css';

import { CardListProps } from '../../@types';

const CardList = ({ cards }: CardListProps) => {
  const renderCards = () =>
    cards.map((card) => <Card key={card._id} data={card} onClick={() => {}} />);
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

export default CardList;
