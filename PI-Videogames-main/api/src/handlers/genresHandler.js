const createGenre = require("../controllers/genresController");
const vgGenresHandler = async (req, res) => {
  try {
    const newGenre = await createGenre();
    res.status(201).json({
      success: true,
      message: "Los géneros se han cargado correctamente",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = vgGenresHandler;
