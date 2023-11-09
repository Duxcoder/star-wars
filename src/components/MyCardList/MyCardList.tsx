import cl from './MyCardList.module.css';
import { CardAllCategory, CardListProps } from '../../types';
import MyCard from '../MyCard/MyCard';
import { RiFileExcelLine } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';

const MyCardList = ({ cards }: CardListProps) => {
  const pathParams = useParams();
  const navigate = useNavigate();
  const getIdCard = (card: CardAllCategory) => card.url.split('/').at(-2);

  const handleCardClick = (card: CardAllCategory) => {
    const cardId = getIdCard(card);
    const newPath = `/${pathParams.category}/${pathParams.cardsPerPage}/${pathParams.page}/details/${cardId}`;
    navigate(newPath);
  };
  const renderCards = () =>
    cards.map((card, i) => <MyCard key={i} data={card} onClick={() => handleCardClick(card)} />);
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
