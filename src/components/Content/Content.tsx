import Header from '../Header/Header';
import Main from '../Main/Main';
import Sword from '../Spinners/Sword';
import cl from './Container.module.css';

import { CardCharacterCategory, ParamsType } from '../../types';

import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { starWarsSlice } from '../../redux/sliceReducer';

const Content = () => {
  const [fetching, setFetching] = useState(true);
  const [errorState, setError] = useState('');
  const cardsPagesData = useLoaderData() as {
    cardsPages: CardCharacterCategory[];
    params: ParamsType;
    pages: number;
  };
  const { state } = useNavigation();
  const { setCountPages } = starWarsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCountPages(cardsPagesData.pages));
  });
  useEffect(() => setFetching(state === 'loading'), [state]);
  useEffect(() => {
    if (errorState) throw new Error(errorState);
  }, [errorState, cardsPagesData]);
  return (
    <>
      <Header setError={setError} fetching={fetching} />
      {fetching ? (
        <div className={cl.spinnerContainer}>
          <Sword />
        </div>
      ) : (
        <Main
          title={`${cardsPagesData.params.category} - ${cardsPagesData.pages} pages`}
          cardsData={cardsPagesData.cardsPages}
          fetching={fetching}
          pages={cardsPagesData.pages}
        />
      )}
    </>
  );
};

export default Content;
