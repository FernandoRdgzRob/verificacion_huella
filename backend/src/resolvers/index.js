const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { Payloads } = require('./Payloads')
const { DateTimeResolver } = require('graphql-scalars')

const resolvers = {
  DateTime: DateTimeResolver,
  Query,
  Mutation,
  ...Payloads
}

module.exports = {
  resolvers
}
