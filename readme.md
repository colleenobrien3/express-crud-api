# Express Crud API Project

- For this project, I created an API using MongoDB, Express, and Mongoose. First, I obtained the data from an API, [Open Brewery DB](https://www.openbrewerydb.org/). The API holds information on breweries across the nation, but I decided I wanted to make a guide specifically for the great people of the great state of Delaware, so I fetched the data for DE, VA, MD, and DC. I used the node-fetch package and fs.writeFile to place the responses into json files. From there, I created a model to structure the data in my own database. Using Mongoose, I connected to my local MongoDB, and seeded my data. Then, I used express to connect to my localhost, and I implemented Create and Read functionality using "get" and "post" methods for my API and connected them to specific routes, which are as follows:

* "/" redirects to /breweries, which shows a list of all breweries
* "/breweries/id", where the use inputs the id number, will select the specific brewery with that id
* "/breweries/name/name" where the user inputs the desired brewery's name in the second "name" spot will show the brewery with that name
* "/breweries/city/city", where the user inputs the desired city in the second "city" spot, will show the breweries within that city
* "/breweries/state/state", where the user inputs the desired state in the second "state" spot, will show the breweries within that state
* "/breweries?property=value", where the user inputs both the property and the desired value will return the breweries with that value in that property
* "/breweries/near/postal_code", where the user inputs the postal code, will return breweries within 5 postal code numbers away in both directions
* In "/breweries", the user is also able to submit a post request to add a brewery to the database

![alt text](pics)

## Getting Started

Click [here](url)

## Built With
