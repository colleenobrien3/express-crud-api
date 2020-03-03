const data = require("./data.json");
const Brewery = require("../models/Brewery");
// const rawBeerData = require("./csvjson.json")
const dataDE = require("./dataDE.json");
const dataPHL = require("./dataPHL.json");

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
    Brewery.create(dataDE).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(dataPHL).then(breweries => console.log(breweries));
  })
  .catch(err => {
    console.log(err);
  });
