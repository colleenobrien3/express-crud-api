const data = require("./data.json");
const Brewery = require("../models/Brewery");
// const rawBeerData = require("./csvjson.json")
const dataDE = require("./dataDE.json");
const dataPHL = require("./dataPHL.json");

const dataBreweries2 = require("./breweries2.json");
const dataBeers = require("./beers.json");

const newBeerData = dataBeers.map(item => {
  for (k = 0; k < dataBreweries2.length; k++) {
    if (item.breweries_id === dataBreweries2[k].id) {
      item["brewery"] = dataBreweries[k].id;
    }
  }
});

const newDeData = dataDE.map(item => {
  for (let i = 0; i < newBeerData.length; i++) {
    if (item.name.contains(newBeerData[i].brewery)) {
      (item.beers = []), item.beers.push(newBeerData[i]);
    }
  }
});

const breweryData = data.map(item => {
  const brewery = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state
  };
  return brewery;
});

// const beerData = rawBeerData.map(item => {
//     const beer = {
//         name: item["13 Guns"],
//         manufacturer: item["Crafty Dan"],
//         type: item.IPA,
//         container: item.bottle,
//         ml: item[330_1],
//         abh: item[5.5]

//     }
// })

// console.log(countryData);

Brewery.remove({})
  .then(() => {
    Brewery.create(breweryData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(newDeData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(dataPHL).then(breweries => console.log(breweries));
  })
  .catch(err => {
    console.log(err);
  });
