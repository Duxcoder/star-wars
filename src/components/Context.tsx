import { createContext } from 'react';
import { RequestOptionsContextType } from '../types';
import { defaultRequestOptionsData } from '../settings';

export const RequestOptionsContext = createContext<RequestOptionsContextType>({
  setRequestOptionsData: null,
  requestOptionsData: defaultRequestOptionsData,
});
