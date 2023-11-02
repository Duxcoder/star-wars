import { createContext } from 'react';
import { RequestOptionsContextType } from '../types';

export const RequestOptionsContext = createContext<RequestOptionsContextType | null>(null);
