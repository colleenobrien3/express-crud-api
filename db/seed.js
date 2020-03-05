const data = require("./data.json");
const Brewery = require("../models/Brewery");
// const rawBeerData = require("./csvjson.json")
const dataDE = require("./dataDE.json");
const dataPHL = require("./dataPHL.json");
const dataMD = require("./dataMD.json");
const dataVA = require("./dataVA.json");

//Adding info on specific beers

const dataBreweries2 = require("./breweries2.json");
const dataBeers = require("./beers.json");

const newBeerData = dataBeers.map(item => {
  const breweryThing = {
    name: item.name,
    style: item.style,
    brewery_id: item.brewery_id,
    abv: item.abv,
    brewery: ""
  };
  for (k = 0; k < dataBreweries2.length; k++) {
    if (breweryThing.brewery_id === dataBreweries2[k].id) {
      breweryThing.brewery = dataBreweries2[k].name;
    }
  }
  return breweryThing;
});
// console.log(newBeerData);

const newDeData = dataDE.map(item => {
  const brewpub = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state,
    postal_code: item.postal_code,
    beers: []
  };
  for (let i = 0; i < newBeerData.length; i++) {
    if (brewpub.name === newBeerData[i].brewery) {
      brewpub.beers.push(newBeerData[i]);
    }
  }
  return brewpub;
});
// console.log(newDeData);

const newPHLData = dataPHL.map(item => {
  const brewpub = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state,
    postal_code: item.postal_code,
    beers: []
  };
  for (let i = 0; i < newBeerData.length; i++) {
    if (brewpub.name === newBeerData[i].brewery) {
      brewpub.beers.push(newBeerData[i]);
    }
  }
  return brewpub;
});

const newDCData = data.map(item => {
  const brewpub = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state,
    postal_code: item.postal_code,
    beers: []
  };
  for (let i = 0; i < newBeerData.length; i++) {
    if (brewpub.name === newBeerData[i].brewery) {
      brewpub.beers.push(newBeerData[i]);
    }
  }
  return brewpub;
});

const newMDData = dataMD.map(item => {
  const brewpub = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state,
    postal_code: item.postal_code,
    beers: []
  };
  for (let i = 0; i < newBeerData.length; i++) {
    if (brewpub.name === newBeerData[i].brewery) {
      brewpub.beers.push(newBeerData[i]);
    }
  }
  return brewpub;
});

const newVAData = dataVA.map(item => {
  const brewpub = {
    name: item.name,
    brewery_type: item.brewery_type,
    street: item.street,
    city: item.city,
    state: item.state,
    postal_code: item.postal_code,
    beers: []
  };
  for (let i = 0; i < newBeerData.length; i++) {
    if (brewpub.name === newBeerData[i].brewery) {
      brewpub.beers.push(newBeerData[i]);
    }
  }
  return brewpub;
});

//THIS WORKS FOR DC DATA, BUT SEEMS SUPERFLOUS
// const breweryData = data.map(item => {
//   const brewery = {
//     name: item.name,
//     brewery_type: item.brewery_type,
//     street: item.street,
//     city: item.city,
//     state: item.state
//   };
//   return brewery;
// });

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
    Brewery.create(newDCData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(newDeData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(newPHLData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(newMDData).then(breweries => console.log(breweries));
  })
  .then(() => {
    Brewery.create(newVAData).then(breweries => console.log(breweries));
  })
  .catch(err => {
    console.log(err);
  });
