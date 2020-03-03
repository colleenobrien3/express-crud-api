const data = require("./data.json");
const Brewery = require("../models/Brewery");

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

// console.log(countryData);

Brewery.remove({})
  .then(() => {
    Brewery.create(breweryData).then(breweries => console.log(breweries));
  })
  .catch(err => {
    console.log(err);
  });
