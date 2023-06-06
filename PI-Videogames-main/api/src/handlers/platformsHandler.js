const axios = require("axios");
const { API_KEY } = process.env;

const getPlatformsHandler = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/platforms?key=${API_KEY}`
    );
    const platforms = response.data.results.map((platform) => ({
      id: platform.id,
      name: platform.name,
    }));
    res.status(200).json(platforms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching platforms" });
  }
};

module.exports = { getPlatformsHandler };
