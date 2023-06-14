const cleanVgames = (games) => {
  return games.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      image: ele.background_image,
      platforms: ele.platforms.map((platform) => platform.platform.name),
      released: ele.released,
      rating: ele.rating,
      genres: ele.genres.map((genre) => genre.name),
      created: false,
    };
  });
};
module.exports = cleanVgames;
