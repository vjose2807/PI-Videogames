const { getAllGames } = require("../controllers/videogamesController");

const getPlatformsHandler = async (req, res) => {
  try {
    let newArr = [];
    let aux = 0;
    const allGames = await getAllGames();
    allGames.forEach((game) => {
      if (aux < game.platforms.length) {
        aux = game.platforms.length;
        newArr = game.platforms;
      }
    });
    res.status(200).json(newArr);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPlatformsHandler };
