const express = require("express");
const app = express();
const parser = require("body-parser");
const Brewery = require("./models/Brewery");

app.use(parser.json());

app.get("/", function(req, res) {
  res.redirect("localhost:3000/breweries");
});

// app.get("/breweries", function(req, res) {
//   Brewery.find({}).then(breweries => {
//     res.json(breweries);
//   });
// });

app.get("/breweries/:id", function(req, res) {
  Brewery.findById(req.params.id).then(breweries => {
    res.json(breweries);
  });
});

app.get("/breweries/name/:name", function(req, res) {
  Brewery.findOne({ name: req.params.name }).then(breweries => {
    res.json(breweries);
  });
});

app.get("/breweries/city/:city", function(req, res) {
  Brewery.find({ city: req.params.city }).then(breweries => {
    res.json(breweries);
  });
});

app.get("/breweries/state/:state", function(req, res) {
  Brewery.find({ state: req.params.state }).then(breweries => {
    res.json(breweries);
  });
});

app.get("/breweries", function(req, res) {
  if (req.query) {
    Brewery.find(req.query).then(brewery => {
      res.json(brewery);
    });
  } else {
    Brewery.find({}).then(brewery => {
      res.json(brewery);
    });
  }
});

app.post("/breweries", function(req, res) {
  Brewery.create(req.body).then(brewery => {
    res.json(brewery);
  });
});

//req.query
//Country.find({})

app.listen(3000, () => console.log("running on 3000"));
