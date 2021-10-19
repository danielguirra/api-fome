const axios = require("axios");

async function getFood(name) {
  let food = await axios.get(`https://apifome.online/comida/${name}`);
  return food["data"];
}

module.exports = { getFood };
