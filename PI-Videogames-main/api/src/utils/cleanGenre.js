const cleanGenre = (genres) => {
  const arrGenres = [];
  genres.map((genre) => arrGenres.push(genre.name));
  return arrGenres;
};

module.exports = cleanGenre;
