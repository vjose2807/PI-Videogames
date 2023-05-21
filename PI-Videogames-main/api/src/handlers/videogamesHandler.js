const {
  createVideogameDB,
  getGameById,
  getGameByName,
  getAllGames,
} = require("../controllers/videogamesController");

const videogamesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const vgByName = await getGameByName(name);
      if (vgByName.length === 0) {
        const allGames = await getAllGames();
        res.status(200).json(allGames);
      } else {
        res.status(200).json(vgByName);
      }
    } else {
      const allGames = await getAllGames();
      res.status(200).json(allGames);
    }
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
  const { name, description, platforms, image, released, rating } = req.body;

  try {
    const response = await createVideogameDB(
      name,
      description,
      platforms,
      image,
      released,
      rating
    );
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
