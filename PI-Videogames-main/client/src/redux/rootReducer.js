import {
  GET_ALLGAMES,
  GET_GENRES,
  GET_GAME_DETAIL,
  GET_ALL_PLATFORMS,
  GET_GAME_BY_NAME,
  ORDER_GAMES,
  FILTER_GENDER_GAMES,
  FILTER_GAMES_DB_API,
  DELETE_GENRE,
  CLEAN_DETAIL,
  CLEAN_INFO_FILTERS,
} from "./actions";

const initialState = {
  allGames: [],
  filterGames: [],
  genresGames: [],
  allPlatforms: [],
  gameDetails: {},
  filterInfo: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALLGAMES:
      return {
        ...state,
        allGames: payload,
        filterGames: payload,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        gameDetails: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genresGames: payload,
      };
    case GET_ALL_PLATFORMS:
      return {
        ...state,
        allPlatforms: payload,
      };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        filterGames: payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        gameDetails: {},
      };
    case CLEAN_INFO_FILTERS:
      return {
        ...state,
        filterGames: state.allGames,
        filterInfo: [],
      };
    case FILTER_GENDER_GAMES:
      const copyGames = state.filterGames;
      const GamesFiltered =
        action.payload === "All Genres"
          ? copyGames
          : copyGames.filter((game) => {
              return !game.createinDb
                ? game.genres.includes(action.payload)
                : game.Genres.map((genre) => genre.name).includes(
                    action.payload
                  );
            });
      return {
        ...state,
        filterGames: GamesFiltered,
        filterInfo:
          action.payload === "Genres"
            ? [...state.filterInfo]
            : state.filterInfo.includes(action.payload)
            ? [...state.filterInfo]
            : [...state.filterInfo, action.payload],
      };
    case DELETE_GENRE:
      const filteredGames = state.allGames.filter((game) => {
        return !game.createinDb
          ? game.genres.includes(payload)
          : game.Genres.map((genre) => genre.name).includes(payload);
      });
      return {
        ...state,
        filterGames: filteredGames,
        filterInfo: state.filterInfo.filter((filter) => filter !== payload),
      };
    case FILTER_GAMES_DB_API:
      let gamesFilter = [...state.allGames];
      if (payload === "Stored Games") {
        gamesFilter = gamesFilter.filter((game) => !game.createinDb);
      } else if (payload === "Created Games") {
        gamesFilter = gamesFilter.filter((game) => game.createinDb);
      }
      return {
        ...state,
        filterGames: gamesFilter,
        filterInfo: payload === "AllGames" ? [] : [payload],
      };
    case ORDER_GAMES:
      let sortedGames = [...state.filterGames];
      if (payload === "Ascendente") {
        sortedGames.sort((g1, g2) => g1.name.localeCompare(g2.name));
      } else if (payload === "Descendente") {
        sortedGames.sort((g1, g2) => g2.name.localeCompare(g1.name));
      } else if (payload === "Rating") {
        sortedGames.sort((g1, g2) => g2.rating - g1.rating);
      }
      return {
        ...state,
        filterGames: sortedGames,
      };
    default:
      return state;
  }
};

export default rootReducer;
