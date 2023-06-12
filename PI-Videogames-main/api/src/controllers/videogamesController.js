const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");
const { cleanVgames } = require("../utils/cleanVgames");
const cleanDetail = require("../utils/cleanVgameDetail");
const gamesPageFilter = require("../utils/gamesPagesFilter");
const { API_KEY } = process.env;

const createVideogameDB = async ({
  name,
  description,
  platforms,
  image,
  released,
  rating,
  genres,
}) => {
  const existVideogame = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
  if (existVideogame.length)
    throw new Error("There is already a game with that name.");
  const newVgame = await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
  });

  const foundGenres = await Genre.findAll({
    where: {
      name: {
        [Op.in]: genres,
      },
    },
  });

  await newVgame.addGenres(foundGenres);

  return newVgame;
};

const getGameById = async (id, source) => {
  if (source === "bdd") {
    const vgameDetailDB = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    return vgameDetailDB;
  } else if (source === "api") {
    const response = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    ).data;
    const vgameDetail = cleanDetail(response);

    return vgameDetail;
  }
};

const getAllGames = async () => {
  const videogamesApi = await gamesPageFilter();
  const videogamesDb = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  return [...videogamesApi, ...videogamesDb];
};

const getGameByName = async (name) => {
  const videogamesDb = await Videogame.findAll({
    where: { name: { [Op.iLike]: name } },
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const response = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    )
  ).data.results;
  const videogamesApi = cleanVgames(response);
  const firstFifteenGames = videogamesApi.slice(0, 15);
  return [...firstFifteenGames, ...videogamesDb];
};

module.exports = {
  createVideogameDB,
  getGameById,
  getGameByName,
  getAllGames,
};
