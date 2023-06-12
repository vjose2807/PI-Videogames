const axios = require("axios");
const { API_KEY } = process.env;
const { Genre } = require("../db.js");
const cleanGenre = require("../utils/cleanGenre.js");

const getGenres = async () => {
  const genresFromDB = await Genre.findAll();
  if (genresFromDB.length === 0) {
    const genresResponse = (
      await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    ).data.results;
    const genresFromAPI = cleanGenre(genresResponse);
    await Genre.bulkCreate(genresFromAPI);
    return genresFromAPI;
  }
};

module.exports = { getGenres };
