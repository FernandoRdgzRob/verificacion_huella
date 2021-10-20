// index.js
const { ApolloServer } = require('apollo-server')
const { readFileSync } = require('fs')
const path = require('path')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')
const { permissions } = require('./permissions')

const server = new ApolloServer({
  typeDefs: readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  // middlewares: [permissions],
  context: {
    prisma
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  )
