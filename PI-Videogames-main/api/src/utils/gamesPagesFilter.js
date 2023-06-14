const axios = require("axios");
const cleanVgames = require("./cleanVgames");
const { API_KEY } = process.env;

const gamesPageFilter = async () => {
  const gamesFiltered = [];

  let URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

  for (let i = 1; i < 6; i++) {
    const response = await axios.get(URL);
    const gamesAPI = response.data;
    URL = gamesAPI.next;
    const gamesCleaned = cleanVgames(gamesAPI.results);
    gamesFiltered.push(gamesCleaned);
  }
  const allGamesPage = gamesFiltered.flat();
  return allGamesPage;
};

module.exports = gamesPageFilter;
