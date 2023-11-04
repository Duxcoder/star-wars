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
interface CardCommonCategory {
  created: string;
  edited: string;
  url: string;
}
export interface CardPeopleCategory extends CardCommonCategory {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}
export interface CardFilmsCategory extends CardCommonCategory {
  characters: string[];
  director: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  vehicles: string[];
}

export interface CardStarshipsCategory extends CardCommonCategory {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
}
export interface CardVehiclesCategory extends CardCommonCategory {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  films: string[];
  vehicle_class: string;
}
export interface CardSpeciesCategory extends CardCommonCategory {
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
}
export interface CardPlanetsCategory extends CardCommonCategory {
  climate: string;
  diameter: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}
export type CardAllCategory =
  | CardPeopleCategory
  | CardPlanetsCategory
  | CardFilmsCategory
  | CardSpeciesCategory
  | CardStarshipsCategory
  | CardVehiclesCategory;
export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export interface CardListProps {
  cards: [] | CardAllCategory[];
}
export interface CardProps {
  data: CardAllCategory;
}
export type CardAll = CardPeople | CardVehicle | CardFilm | CardStarship | CardSpecies | CardPlanet;
export interface CardPeople {
  name: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
}
export interface CardVehicle {
  name: string;
  crew: string;
  manufacturer: string;
  model: string;
  passengers: string;
}
export interface CardFilm {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
}
export interface CardStarship {
  name: string;
  manufacturer: string;
  crew: string;
  passengers: string;
  cost_in_credits: string;
}
export interface CardSpecies {
  name: string;
  classification: string;
  designation: string;
  language: string;
  skin_colors: string;
}
export interface CardPlanet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
  terrain: string;
}
export type GetContentType = (searchText: string, newSearch: boolean) => Promise<void>;
export interface HeaderProps {
  getContent: GetContentType;
  fetching: boolean;
  setError: (err: string) => void;
}
export interface MainProps {
  title: Categories | string;
  cardsData: [] | CardAllCategory[];
  fetching: boolean;
  pages: number;
}
export interface CardsPages {
  data: CardAllCategory[];
  allCount: number;
}
export interface RequestOptionsData {
  allCount: number;
  cardsPerPage: number;
  allPages: number;
  currentPage: number;
  category: Categories;
}
export interface RequestOptionsContextType {
  requestOptionsData: RequestOptionsData;
  setRequestOptionsData: Dispatch<SetStateAction<RequestOptionsData>> | null;
}
export interface PaginationProps {
  pages: number;
}
