const { getGenres } = require("../controllers/genresController");
const { Genre } = require("../db.js");
const cleanGenre = require("../utils/cleanGenre.js");
const saveGenresOnBDD = require("../utils/saveGenres");

const genresHandler = async (req, res) => {
  const genresFromDB = await Genre.findAll();
  try {
    const response = await getGenres();
    if (genresFromDB.length === 0) saveGenresOnBDD(response);
    const genresCleaned = cleanGenre(response);
    res.status(200).json(genresCleaned);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { genresHandler };
