const cleanArray = (arr) => {
  return arr.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      description: ele.description,
      platforms: ele.platforms,
      image: ele.background_image,
      released: ele.released,
      rating: ele.rating,
      created: false,
    };
  });
};
module.exports = cleanArray;
