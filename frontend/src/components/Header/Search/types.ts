import { Game } from "views/Catalog/components/CatalogGamesContent/types";

export type gamesSearchResults = Game[];
export type gamesSearchError = {
  error: true;
  message: string;
};
export type game = Game
