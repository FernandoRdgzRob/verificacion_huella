const { checkValidUser } = require('../utils')

const Query = {
  getAllVerifications: async (parent, args, context) => {
    const userId = await checkValidUser(context)

    const verifications = await context.prisma.verifications({
      where: {
        createdBy: {
          id: userId
        }
      }
    })

    return verifications
  }
}

module.exports = {
  Query
}
