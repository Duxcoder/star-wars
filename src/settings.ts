export enum Categories {
  Character = 'character',
}
export enum LocalStorage {
  searchText = '$searchText',
}
export const API_SERVICE_URL = 'https://api.disneyapi.dev';
export const initialCategory = Categories.Character;
export const CATEGORIES = [Categories.Character];
export enum RouteLinks {
  home = '/',
  notFound = '*',
}
export const defaultRequestOptionsData = {
  search: localStorage.getItem(LocalStorage.searchText) ?? '',
  allCount: 0,
  allPages: 0,
  currentPage: 1,
  cardsPerPage: 10,
  category: initialCategory,
  cardsData: [],
};
