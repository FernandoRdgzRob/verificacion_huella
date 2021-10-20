const { rule, shield } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  })
}

const permissions = shield({
  Query: {
    getAllVerifications: rules.isAuthenticatedUser
  },
  Mutation: {
    createVerification: rules.isAuthenticatedUser
  }
})

module.exports = {
  permissions
}
