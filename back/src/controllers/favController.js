var favs = require("../utils/favs.js");

const addFav = (req, res) => {
  let character = req.body;
  if (character && favs.push(character)) res.status(200).json(character);
  else res.status(500).json({ error: "Error POST FAV" });
};

const getFavs = (req, res) => {
  if (favs) res.status(200).json(favs);
  else res.status(500).json({ error: "Error GET FAVS" });
};

const deleteFav = (req, res) => {
  let { id } = req.params;
  if (id >= 0) {
    favs = favs.filter((event) => event.id !== Number(id));
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ error: "Error DELETE FAV" });
  }
};

module.exports = { addFav, getFavs, deleteFav };
