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
  switch (action.type) {
    case GET_ALLGAMES:
      return {
        ...state,
        allGames: action.payload,
        filterGames: action.payload,
      };
    case GET_GAME_DETAIL:
      return {
        ...state,
        gameDetails: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genresGames: action.payload,
      };
    case GET_ALL_PLATFORMS:
      return {
        ...state,
        allPlatforms: action.payload,
      };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        filterGames: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        gameDetails: {},
      };
    case CLEAN_INFO_FILTERS:
      return {
        ...state,
        filterInfo: [],
      };

    case FILTER_GENDER_GAMES:
      const copyGames = state.filterGames; //AllGames

      const GamesFiltered =
        action.payload === "Genres"
          ? copyGames
          : copyGames.filter((game) => {
              return !game.createinDb
                ? game.genres.includes(action.payload) //Para juegos API
                : game.Genres.map((genre) => genre.name).includes(
                    action.payload
                  ); //Para juegos DB
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
      const copyGamess = state.filterGames; //AllGames

      const FilteredGames = copyGamess.filter((game) => {
        return !game.createinDb
          ? game.genres.filter((gen) => gen !== action.payload) //Para juegos API
          : game.Genres.map((genre) => genre.name).filter(
              (gen) => gen !== action.payload
            ); //Para juegos DB
      });
      return {
        ...state,
        filterGames: FilteredGames,
        filterInfo: state.filterInfo.filter((filt) => filt !== action.payload),
      };

    case FILTER_GAMES_DB_API:
      const GamesDBAPI = [...state.allGames];
      const GamesFilter =
        action.payload === "Stored Games"
          ? GamesDBAPI.filter((game) => game.createinDb === false)
          : action.payload === "Created Games"
          ? GamesDBAPI.filter((game) => game.createinDb === true)
          : GamesDBAPI;
      return {
        ...state,
        filterGames: GamesFilter,
        filterInfo: action.payload === "AllGames" ? [] : [action.payload],
      };

    case ORDER_GAMES:
      const Games = [...state.filterGames]; //AllGames
      const Sort =
        action.payload === "Ascendente"
          ? Games.sort((g1, g2) => {
              if (g1.name < g2.name) return 1;
              if (g1.name > g2.name) return -1;
              return 0;
            })
          : action.payload === "Descendente"
          ? Games.sort((g1, g2) => {
              if (g1.name < g2.name) return -1;
              if (g1.name > g2.name) return 1;
              return 0;
            })
          : action.payload === "Rating"
          ? Games.sort((g1, g2) => {
              if (g1.rating < g2.rating) return 1;
              if (g1.rating > g2.rating) return -1;
              return 0;
            })
          : Games;
      return {
        ...state,
        filterGames: Sort,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
