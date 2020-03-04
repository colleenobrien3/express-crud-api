const data = require("./data.json");
const Brewery = require("../models/Brewery");
// const rawBeerData = require("./csvjson.json")
const dataDE = require("./dataDE.json");
const dataPHL = require("./dataPHL.json");

//Trying to add info on specific beers

const dataBreweries2 = require("./breweries2.json");
const dataBeers = require("./beers.json");

const newBeerData = dataBeers.map(item => {
  const breweryThing = {
    name: item.name,
    style: item.style,
    brewery_id: item.brewery_id,
    brewery: ""
  };
  for (k = 0; k < dataBreweries2.length; k++) {
    if (breweryThing.brewery_id === dataBreweries2[k].id) {
      breweryThing.brewery = dataBreweries2[k].name;
    }
  }
  return breweryThing;
});
console.log(newBeerData);
const newDeData = dataDE.map(item => {
  for (let i = 0; i < newBeerData.length; i++) {
    if (item.name === newBeerData[i].brewery) {
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

//Trying to add info about beer from another source
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
