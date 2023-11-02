export enum Categories {
  People = 'people',
  Vehicles = 'vehicles',
  Films = 'films',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
}
export enum LocalStorage {
  searchText = '$searchText',
}
export const API_SERVICE_URL = 'https://swapi.py4e.com/api/';
export const initialCategory = Categories.People;
export const CATEGORIES = [
  Categories.People,
  Categories.Vehicles,
  Categories.Films,
  Categories.Planets,
  Categories.Species,
  Categories.Starships,
];
