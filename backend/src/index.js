const { ApolloServer } = require('apollo-server')
const { readFileSync } = require('fs')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')
const { getUserId } = require('./utils')
const path = require('path')

const server = new ApolloServer({
  typeDefs: readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
  context: ({ req }) => {
    const userId = getUserId(req)
    return { userId, prisma }
  }
})

server
  .listen()
  .then(({ url }) => console.log(`Server is running on ${url}`))
