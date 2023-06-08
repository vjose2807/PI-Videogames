const createGenre = require("../controllers/genresController");
const vgGenresHandler = async (req, res) => {
  try {
    const newGenre = await createGenre();
    res.status(200).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = vgGenresHandler;
