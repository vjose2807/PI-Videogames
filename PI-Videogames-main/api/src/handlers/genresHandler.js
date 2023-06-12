const { getGenres } = require("../controllers/genresController");

const genresHandler = async (req, res) => {
  try {
    const response = await getGenres();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { genresHandler };
