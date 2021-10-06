const Query = {
  getAllFingerprints: async (parent, args, context) => {
    return context.prisma.fingerprints()
  }
}

module.exports = {
  Query
}
