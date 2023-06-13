const axios = require("axios");
const { Genre } = require("../db.js");
const cleanGenre = require("../utils/cleanGenre.js");
const { API_KEY } = process.env;

const getGenres = async () => {
  const genresResponse = (
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  ).data.results;
  const genresFromAPI = cleanGenre(genresResponse);
  const genresFromDB = await Genre.findAll();
  if (genresFromDB.length === 0) {
    await Genre.bulkCreate(genresFromAPI);
  }
  return genresFromAPI;
};

module.exports = { getGenres };
