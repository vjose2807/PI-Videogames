const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;

const createGenres = async () => {
  await axios
    .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then(async (res) => {
      const data = res.data.results;
      const genres = data.map((genre) => genre.name);
      const newGenres = await Genre.bulkCreate(
        genres.map((name) => ({ name }))
      );
      console.log(data);
    });
};

module.exports = createGenres;
