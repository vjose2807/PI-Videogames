const cleanDetail = ({
  id,
  name,
  released,
  description,
  platforms,
  background_image,
  rating,
  genres,
}) => {
  return (newDetails = {
    id,
    name,
    description,
    platforms: platforms.map((elem) => elem.platform.name),
    image: background_image,
    released,
    genres: genres.map((elem) => elem.name),
    rating,
    createinDb: false,
  });
};

module.exports = cleanDetail;
