const fetch = require("node-fetch");
const fs = require("fs");

const url =
  "https://api.openbrewerydb.org/breweries?by_state=district_of_columbia";

fetch(url)
  .then(res => res.json())
  .then(res => {
    // console.log(res);
    let breweries = JSON.stringify(res);
    fs.writeFile("./db/data.json", breweries, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
