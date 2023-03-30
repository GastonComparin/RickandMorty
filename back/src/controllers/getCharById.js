const axios = require("axios");
const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "0b52d6b287c0.f2cd50b06d9815820805";
const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, image, gender } = response.data;
      res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
