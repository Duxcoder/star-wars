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
    const { name, gender, height, hair_color, mass } = data as CardPeopleCategory;
    return { name, gender, height, hair_color, mass };
  }
  if (category === Categories.Vehicles) {
    const { name, crew, model, manufacturer, passengers } = data as CardVehiclesCategory;
    return { name, crew, model, manufacturer, passengers };
  }
  if (category === Categories.Films) {
    const { title, director, producer, opening_crawl, release_date } = data as CardFilmsCategory;
    return { title, director, producer, opening_crawl, release_date };
  }
  if (category === Categories.Starships) {
    const { name, passengers, manufacturer, crew, cost_in_credits } = data as CardStarshipsCategory;
    return { name, passengers, manufacturer, crew, cost_in_credits };
  }
  if (category === Categories.Species) {
    const { name, classification, designation, language, skin_colors } =
      data as CardSpeciesCategory;
    return { name, classification, designation, language, skin_colors };
  }
  if (category === Categories.Planets) {
    const { name, climate, population, terrain, diameter } = data as CardPlanetsCategory;
    return { name, climate, population, terrain, diameter };
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
