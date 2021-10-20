const Query = {
  getAllVerifications: async (parent, args, context) => {
    return context.prisma.verifications()
  }
}

module.exports = {
  Query
}
