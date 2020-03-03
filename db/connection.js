const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/breweries", { useNewUrlParser: true });

module.exports = mongoose;
