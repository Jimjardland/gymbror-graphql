# Gymbror

This project runs postgresSql in a docker container

## Setup
Edit your docker-compose file to set up user and password

// Runs the docker-compose and sets up postgresSql

`docker-compose up`

// set up env variable

`export DATABASE_URL=postgres://user:password@localhost/gymbror`

Edit config.json to your db settings

finally `npm run dev` will run migrations and start nodemon


### Migrations
// Create

`./node_modules/.bin/pg-migrate create {name}`

//rollback a migrate

`./node_modules/.bin/pg-migrate down`


//up

`npm run migrate`