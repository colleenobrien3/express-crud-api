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

const urlDE = "https://api.openbrewerydb.org/breweries?by_state=delaware";

fetch(urlDE)
  .then(res => res.json())
  .then(res => {
    // console.log(res);
    let breweriesDE = JSON.stringify(res);
    fs.writeFile("./db/dataDE.json", breweriesDE, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });

const urlPHL = "https://api.openbrewerydb.org/breweries?by_city=philadelphia";

fetch(urlPHL)
  .then(res => res.json())
  .then(res => {
    // console.log(res);
    let breweriesPHL = JSON.stringify(res);
    fs.writeFile("./db/dataPHL.json", breweriesPHL, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    });
  });
