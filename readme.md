# Express API Project

- For this project, I created an API using MongoDB, Express, and Mongoose. First, I obtained the data from an API, [Open Brewery DB](https://www.openbrewerydb.org/). The API holds information on breweries across the nation, but I decided I wanted to make a guide specifically for the great people of the great state of Delaware, so I fetched the data for DE, VA, MD, and DC. I used the node-fetch package and fs.writeFile to place the responses into json files. From there, I created a model to structure the data in my own database. Using Mongoose, I connected to my local MongoDB, and seeded my data. Then, I used express to connect to my localhost, and I implemented Create and Read functionality using "get" and "post" methods for my API and connected them to specific routes, which are as follows:

## RESTful Paths

| Method |             Path             | Description                                                                  |
| ------ | :--------------------------: | ---------------------------------------------------------------------------- |
| GET    |              /               | Redirects to /breweries                                                      |
| GET    |          /breweries          | Retrieves all breweries                                                      |
| GET    |        /breweries/:id        | Retrieves brewery by id                                                      |
| GET    |    /breweries/name/:name     | Retrieves brewery with matching name parameter                               |
| GET    |    /breweries/city/:city     | Retrieves all breweries with matching city parameter                         |
| GET    |   /breweries/state/:state    | Retrieves all breweries with matching state parameter                        |
| GET    | /breweries?:property=:value  | Retrieves breweries with specified value in specified property of the schema |
| GET    | /breweries/near/:postal_code | Retrieves breweries within 5 area codes away in each direction               |
| POST   |          /breweries          | Adds a new brewery to the collection                                         |

## Getting Started

Click [here](https://evening-ravine-76048.herokuapp.com/breweries) to view the API on Heroku!

## Built With:

- JavaScript
- Express
- MongoDB
- Node

## Goals

I just need to define paths to implement Delete and Update functionality and achieve full CRUD! It shouldn't be too hard to do, just need to find the time! User authentication would also be cool to do eventually, maybe with JWT Tokens and Passport.
