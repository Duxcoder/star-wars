import Card from '../Card/Card';
import { RiFileExcelLine } from 'react-icons/ri';
import cl from './CardList.module.css';

import { CardListProps } from '@myTypes/main';
import { useRouter } from 'next/router';
const CardList = ({ cards }: CardListProps) => {
  const router = useRouter();
  const renderCards = () =>
    cards.map((card) => (
      <Card key={card._id} data={card} onClick={() => router.push('/character/' + card._id)} />
    ));
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
