import {
  CardAll,
  CardAllCategory,
  CardFilmsCategory,
  CardPeopleCategory,
  CardPlanetsCategory,
  CardSpeciesCategory,
  CardStarshipsCategory,
  CardVehiclesCategory,
} from '../../types';
import { Categories } from '../../settings';

function fieldsForCategory(category: string, data: CardAllCategory): CardAll | null {
  if (category === Categories.People) {
    const { name, gender, species, starships, vehicles, films } = data as CardPeopleCategory;
    return { name, gender, species, starships, vehicles, films };
  }
  if (category === Categories.Vehicles) {
    const { name, pilots, films } = data as CardVehiclesCategory;
    return { name, pilots, films };
  }
  if (category === Categories.Films) {
    const { title, director, producer, opening_crawl } = data as CardFilmsCategory;
    return { title, director, producer, opening_crawl };
  }
  if (category === Categories.Starships) {
    const { name, passengers, pilots, cost_in_credits, films } = data as CardStarshipsCategory;
    return { name, passengers, pilots, cost_in_credits, films };
  }
  if (category === Categories.Species) {
    const { name, classification, designation, language, films } = data as CardSpeciesCategory;
    return { name, classification, designation, language, films };
  }
  if (category === Categories.Planets) {
    const { name, climate, population, terrain, films } = data as CardPlanetsCategory;
    return { name, climate, population, terrain, films };
  }
  return null;
}
function getCard(data: CardAllCategory) {
  if ('vehicle_class' in data) {
    return fieldsForCategory(Categories.Vehicles, data);
  }
  if ('gender' in data) {
    return fieldsForCategory(Categories.People, data);
  }
  if ('producer' in data) {
    return fieldsForCategory(Categories.Films, data);
  }
  if ('starship_class' in data) {
    return fieldsForCategory(Categories.Starships, data);
  }
  if ('language' in data) {
    return fieldsForCategory(Categories.Species, data);
  }
  if ('gravity' in data) {
    return fieldsForCategory(Categories.Planets, data);
  }
  return null;
}

export default getCard;
