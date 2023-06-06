import axios from "axios";

//ACTION TYPES
export const GET_ALLGAMES = "GET_ALLGAMES";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const GET_GAME_BY_NAME = "GET_GAME_BY_NAME";

export const ORDER_GAMES = "ORDER_GAMES";
export const FILTER_GAMES_DB_API = "FILTER_GAMES_DB_API";
export const FILTER_GENDER_GAMES = "FILTER_GENDER_GAMES";
export const DELETE_GENRE = "DELETE_GENRE";

export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEAN_INFO_FILTERS = "CLEAN_INFO_FILTERS";

//ACTION CREATORS
export const getAllGames = () => {
  return async function (dispatch) {
    const response = (await axios.get(`http://localhost:3001/videogames`)).data;
    return dispatch({ type: GET_ALLGAMES, payload: response });
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    const response = (await axios.get(`http://localhost:3001/genres`)).data;
    return dispatch({ type: GET_GENRES, payload: response });
  };
};

export const getGameDetail = (id) => {
  return async function (dispatch) {
    const response = (await axios.get(`http://localhost:3001/videogames/${id}`))
      .data;
    dispatch({ type: GET_GAME_DETAIL, payload: response });
  };
};

export const getAllPlatforms = () => {
  return async function (dispatch) {
    const response = (await axios.get(`http://localhost:3001/platforms`)).data;

    return dispatch({ type: GET_ALL_PLATFORMS, payload: response });
  };
};

export const getGameByName = (name) => {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(`http://localhost:3001/videogames?name=${name}`)
      ).data;
      return dispatch({ type: GET_GAME_BY_NAME, payload: response });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
};

export const createGames = (videogame) => {
  return function () {
    axios
      .post("http://localhost:3001/videogames", videogame)
      .catch((error) =>
        alert(
          "The game could not be created: it doesn't meet the validation requirements."
        )
      );
  };
};

export const filterGenres = (gender) => {
  return { type: FILTER_GENDER_GAMES, payload: gender };
};
export const deleteGenre = (genre) => {
  return { type: DELETE_GENRE, payload: genre };
};

export const filterGamesDBorAPI = (datatype) => {
  return { type: FILTER_GAMES_DB_API, payload: datatype };
};

export const orderGames = (order) => {
  return { type: ORDER_GAMES, payload: order };
};

export const cleanGameDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const cleanInfoFilters = () => {
  return { type: CLEAN_INFO_FILTERS };
};
