// const axios = require("axios");
// const { API_KEY } = process.env;

// const getPlatforms = async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.rawg.io/api/platforms?key=${API_KEY}`
//     );
//     const platforms = response.data.results.map((platform) => platform.name);
//     res.status(200).json(platforms);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = { getPlatforms };
