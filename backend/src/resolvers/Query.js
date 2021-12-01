const { checkValidUser } = require('../utils')

const Query = {
  getAllVerifications: async (parent, args, context, info) => {
    const userId = await checkValidUser(context)

    const verifications = await context.prisma.verifications({
      where: {
        createdBy: {
          id: userId
        }
      }
    }, info)

    return verifications
  }
}

module.exports = {
  Query
}
