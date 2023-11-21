import cl from './MainCard.module.css';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { getData } from '../API/ApiService';
import { LoaderContentType } from '../../types';
import BaseButton from '../UI/BaseButton/BaseButton';
import { RiCloseLine } from 'react-icons/ri';
import Sword from '../Spinners/Sword';
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }: LoaderContentType) => {
  const { category, id } = params;
  return id ? getData(`${category}/${id}`) : null;
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
        card.map(([name, value], i) => {
          return (
            <div className={cl.cardRow} key={i}>
              <span className={cl.cardRowName}>{name.split('_').join(' ')}</span>
              <span className={cl.cardRowValue}>{value}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MainCard;
