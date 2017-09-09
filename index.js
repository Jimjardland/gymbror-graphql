const express = require('express')
const { apolloExpress } = require('apollo-server')
const { makeExecutableSchema } = require('graphql-tools')
const { graphiqlExpress } = require('apollo-server')
const bodyParser = require('body-parser')

const typeDefs = require('./lib/graphql/typeDefs')
const resolvers = require('./lib/graphql/resolvers')
const schema = makeExecutableSchema({ typeDefs, resolvers })

const app = express()

app.use(
  '/graphql',
  bodyParser.json(),
  apolloExpress({ schema })
)
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(3000)
console.log('up')