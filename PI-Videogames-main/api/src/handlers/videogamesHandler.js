const {
  createVideogameDB,
  getGameById,
  getGameByName,
  getAllGames,
} = require("../controllers/videogamesController");
const verifyDataGame = require("../utils/verifyDataGame");

const videogamesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const response = name ? await getGameByName(name) : await getAllGames();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const vgDetailHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const response = await getGameById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const vgCreateHandler = async (req, res) => {
  const { name, description, platforms, image, released, rating, genres } =
    req.body;

  try {
    const verifiedGame = verifyDataGame({
      name,
      description,
      genres,
      platforms,
      image,
      released,
      rating,
    });
    const response = await createVideogameDB(verifiedGame);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  vgDetailHandler,
  videogamesHandler,
  vgCreateHandler,
};
