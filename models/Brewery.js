const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
const Brewery = new Schema({
  name: String,
  brewery_type: String,
  street: String,
  city: String,
  state: String
});

module.exports = mongoose.model("Brewery", Brewery);
