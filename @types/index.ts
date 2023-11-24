import { ReactNode, MouseEvent } from 'react';

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

export interface RequestAnswerType {
  data: CardCharacterCategory[];
  info: { count: number; totalPages: number };
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

export interface ContentProps {
  title: string;
  cards: [] | CardCharacterCategory[];
}

export interface HeaderProps {
  fetching: boolean;
  setError: (err: string) => void;
}

export interface CardListProps {
  cards: [] | CardCharacterCategory[];
}

export interface CardProps {
  data: CardCharacterCategory;
  onClick: () => void;
}
