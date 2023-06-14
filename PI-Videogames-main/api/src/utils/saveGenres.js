const { Genre } = require("../db.js");

const saveGenresOnBDD = async (arrayData) => {
  let arrayGenres = arrayData.map((genre) => genre.name);
  arrayGenres.forEach(async (genre) => {
    if (genre.length > 0) {
      await Genre.findOrCreate({ where: { name: genre } });
    }
  });
};

module.exports = saveGenresOnBDD;
