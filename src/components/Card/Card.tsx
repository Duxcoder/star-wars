import { checkNotFoundText } from '../../utils/utils';
import cl from './Card.module.css';

import { CardCharacterCategory, CardProps } from '../../types';

import { useEffect, useState } from 'react';

const Card = ({ data, onClick }: CardProps) => {
  const [card, setCard] = useState<[string, string | string[]][]>([]);

  useEffect(() => {
    const { name, films, shortFilms, tvShows, videoGames } = data as CardCharacterCategory;
    setCard(
      Object.entries(
        { name, films, shortFilms, tvShows, videoGames } ?? [['error', 'Data is not found']]
      )
    );
  }, [data]);

  return (
    <div className={cl.card} onClick={onClick} data-testid="card">
      {card.map(([name, value], i) => {
        return (
          <div className={cl.cardRow} key={i}>
            <span className={cl.cardRowName}>{name.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
            <span className={cl.cardRowValue}>{checkNotFoundText(value)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
