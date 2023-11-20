import Card from '../Card/Card';
import { RiFileExcelLine } from 'react-icons/ri';
import cl from './CardList.module.css';

import { CardCharacterCategory, CardListProps } from '../../types';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const CardList = ({ cards }: CardListProps) => {
  const [searchParams] = useSearchParams();
  const { category, cardsPerPage, page } = useParams();
  const navigate = useNavigate();
  const handleCardClick = (card: CardCharacterCategory) => {
    const { _id } = card;

    const searchText = searchParams.get('search');

    const detailsPart = _id ? `/details/${_id}` : '';
    const searchPart = searchText ? `?search=${searchText}` : '';
    const path = `/${category}/${cardsPerPage}/${page}${detailsPart}${searchPart}`;
    navigate(path);
  };
  const renderCards = () =>
    cards.map((card) => <Card key={card._id} data={card} onClick={() => handleCardClick(card)} />);
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
