import BaseButton from '../UI/BaseButton/BaseButton';
import Sword from '../Spinners/Sword';
import { RiCloseLine } from 'react-icons/ri';
import { checkNotFoundText } from '../../utils/utils';
import cl from './MainCard.module.css';

import { LoaderContentType } from '../../types';

import { redirect, useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { setupStore } from '../../redux';
import { APICards } from '../../services/service';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: LoaderContentType) => {
  const { category, id } = params;
  const options = {
    category: category ?? '',
    id: id ?? '',
  };
  const p = setupStore().dispatch(APICards.endpoints.fetchCard.initiate(options));
  try {
    const response = await p.unwrap();
    return response.data;
  } catch (e) {
    return redirect('/');
  } finally {
    p.unsubscribe();
  }
};
const MainCard = () => {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const { category, cardsPerPage, page } = useParams();
  const cardData = useLoaderData();
  const card = Object.entries(cardData ?? [['error', 'Data is not found']]);
  return (
    <div className={cl.card} data-testid="main-card">
      <BaseButton circle close callback={() => navigate(`/${category}/${cardsPerPage}/${page}`)}>
        <RiCloseLine />
      </BaseButton>
      {state === 'loading' ? (
        <Sword red />
      ) : (
        card.map(([name, value]) => {
          return (
            <div className={cl.cardRow} key={name}>
              <span className={cl.cardRowName}>{name.replace(/([a-z])([A-Z])/g, '$1 $2')}</span>
              <span className={cl.cardRowValue}>{checkNotFoundText(value)}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MainCard;
