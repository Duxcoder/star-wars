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
