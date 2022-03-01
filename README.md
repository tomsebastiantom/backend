REST API with NodeJS
This is a simple REST API developed using node and express with /search route which accepts search queries with 'q' key

Run the app locally
git clone https://github.com/nmanikiran/rest-api-node-typescript.git

npm install

npm start - This will start the application and run on port 3000

Folder Structure
src
└───index.ts          # Application entry point
└───routes            # Application routes / endpoints
└───controllers       # Express route controllers for all the endpoints of the app
└───db                # DB related files like connection / seed data
└───models            # DB Models (MongoDB)
└───utils             # Additional utilities used


## REST Services

The application exposes one REST endpoints

`HTTP` `GET` /api/search