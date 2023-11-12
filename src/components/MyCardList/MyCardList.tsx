import cl from './MyCardList.module.css';
import { CardAllCategory, CardListProps } from '../../types';
import MyCard from '../MyCard/MyCard';
import { RiFileExcelLine } from 'react-icons/ri';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const MyCardList = ({ cards }: CardListProps) => {
  const [searchParams] = useSearchParams();
  const { category, cardsPerPage, page } = useParams();
  const navigate = useNavigate();
  const getIdCard = (card: CardAllCategory) => card.url.split('/').at(-2);

  const handleCardClick = (card: CardAllCategory) => {
    const cardId = getIdCard(card);

    const searchText = searchParams.get('search');

    const detailsPart = cardId ? `/details/${cardId}` : '';
    const searchPart = searchText ? `?search=${searchText}` : '';
    const path = `/${category}/${cardsPerPage}/${page}${detailsPart}${searchPart}`;
    navigate(path);
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
