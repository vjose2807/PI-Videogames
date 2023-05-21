const axios = require("axios");
const { Videogame } = require("../db");
const cleanArray = require("../utils/cleanArray");
const { API_KEY } = process.env;

const createVideogameDB = async (
  name,
  description,
  platforms,
  image,
  released,
  rating
) => {
  return await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
  });
};

const getGameById = async (id, source) => {
  const videoGame =
    source === "api"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data
      : await Videogame.findByPk(id);

  return videoGame;
};

const getAllGames = async () => {
  const videogamesDb = await Videogame.findAll();
  const vgApiInfo = (
    await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
  ).data.results;
  const videogamesApi = cleanArray(vgApiInfo);
  return [...videogamesApi, ...videogamesDb];
};

const getGameByName = async (name) => {
  const videogamesDb = await Videogame.findAll({
    where: { name: name },
    limit: 15,
  });

  const vgApiInfo = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&pageSize=15`
    )
  ).data.results;

  const videogamesApi = cleanArray(vgApiInfo);

  const filteredApi = videogamesApi.filter((game) => game.name);

  return [...filteredApi, ...videogamesDb];
};

module.exports = {
  createVideogameDB,
  getGameById,
  getGameByName,
  getAllGames,
};
