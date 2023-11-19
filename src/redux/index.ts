import { combineReducers, configureStore } from '@reduxjs/toolkit';
import starWarsReducer from './sliceReducer';
import { APICards } from '../services/service';

const rootReducer = combineReducers({
  starWarsReducer,
  [APICards.reducerPath]: APICards.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(APICards.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
