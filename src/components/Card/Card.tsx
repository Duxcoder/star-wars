import cl from './Card.module.css';
import { CardProps } from '../../types';
import getCard from './identifyCardCategory';
import { useEffect, useState } from 'react';

const Card = ({ data, onClick }: CardProps) => {
  const [card, setCard] = useState<[string, string][]>([]);

  useEffect(() => {
    const cardDataFields = getCard(data);
    setCard(Object.entries(cardDataFields ?? [['error', 'Data is not found']]));
  }, [data]);

  return (
    <div className={cl.card} onClick={onClick} data-testid="card">
      {card.map(([name, value], i) => {
        return (
          <div className={cl.cardRow} key={i}>
            <span className={cl.cardRowName}>{name.split('_').join(' ')}</span>
            <span className={cl.cardRowValue}>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
