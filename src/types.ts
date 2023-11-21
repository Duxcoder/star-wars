import { Dispatch, ReactNode, MouseEvent, ErrorInfo, SetStateAction } from 'react';
import { Categories } from './settings';
export interface ChildProps {
  children: ReactNode;
}
export interface ButtonProps {
  name: string | number;
  disabled: boolean;
  children?: ReactNode;
  active?: boolean;
  circle?: boolean;
  close?: boolean;
  callback: (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface InputProps {
  value: string;
  placeholder: string;
  disabled: boolean;
  type: 'text' | 'search';
  callback: (text: string) => void;
}
export interface SelectProps {
  value: string | number;
  disabled: boolean;
  options: (number | Categories)[];
  onChange: (value: number | Categories) => void;
  label: string;
}
export interface CardCharacterCategory {
  _id: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: string;
}
export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export interface CardListProps {
  cards: [] | CardCharacterCategory[];
}
export interface CardProps {
  data: CardCharacterCategory;
  onClick: () => void;
}

export interface CardCharacter {
  name: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
}

export interface HeaderProps {
  fetching: boolean;
  setError: (err: string) => void;
}
export interface MainProps {
  title: Categories | string;
  cardsData: [] | CardCharacterCategory[];
  fetching: boolean;
  pages: number;
}
export interface CardsPages {
  data: CardCharacterCategory[];
  allCount: number;
}
export interface RequestOptionsData {
  search: string;
  allCount: number;
  cardsPerPage: number;
  allPages: number;
  currentPage: number;
  category: Categories | string;
  cardsData: [] | CardCharacterCategory[];
}
export interface RequestOptionsContextType {
  requestOptionsData: RequestOptionsData;
  setRequestOptionsData: Dispatch<SetStateAction<RequestOptionsData>> | null;
}
export interface PaginationProps {
  pages: number;
}
export interface ParamsType {
  category?: string;
  search?: string;
  cardsPerPage?: string;
  page?: string;
  id?: string;
}
export interface LoaderContentType {
  request: { url: string };
  params: ParamsType;
}

export interface GetCardsPagesType {
  category: Categories | string;
  text: string;
  cardsPerPage: string | number;
  startPage: number;
}

export interface GetCardPageType {
  category: Categories | string;
  id: string;
}

export interface RequestAnswerType {
  data: CardCharacterCategory[];
  info: { count: number; totalPages: number };
}
