const verifyDataGame = ({
  id,
  name,
  description,
  genres,
  platforms,
  image,
  released,
  rating,
}) => {
  if (
    !name ||
    name.length < 2 ||
    genres.length === 0 ||
    platforms.length === 0 ||
    (rating > 10 && rating < 0)
  ) {
    throw new Error("No cumple con los requisitos de validación");
  }

  return {
    id,
    name,
    description: description ? description : "Unavailable information",
    genres,
    platforms,
    image: image
      ? image
      : "https://screencraft.org/wp-content/uploads/2021/08/Write-for-Video-Games-scaled.jpg",
    rating,
    released: released ? released : "Unavailable information.",
  };
};

module.exports = verifyDataGame;
