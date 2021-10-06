const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { DateTimeResolver } = require('graphql-scalars')

const resolvers = {
  DateTime: DateTimeResolver,
  Query,
  Mutation
}

module.exports = {
  resolvers
}
