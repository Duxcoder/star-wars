import BaseButton from '@components/UI/BaseButton/BaseButton';
import { RiCloseLine } from 'react-icons/ri';
import { checkNotFoundText } from '../../utils/utils';
import cl from './MainCard.module.css';

import { CardCharacterCategory } from '@myTypes/main';

const MainCard = (props: { card: CardCharacterCategory }) => {
  const card = Object.entries(props.card ?? [['error', 'Data is not found']]);
  return (
    <div className={cl.card} data-testid="main-card">
      <BaseButton circle close callback={() => {}}>
        <RiCloseLine />
      </BaseButton>
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

export default MainCard;
