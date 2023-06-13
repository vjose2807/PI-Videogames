require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getGenres = async () => {
  const genresFromAPI = (
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  ).data.results;

  return genresFromAPI;
};

module.exports = { getGenres };
