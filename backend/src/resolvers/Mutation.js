const Mutation = {
  createFingerprint: (parent, { type, side }, context) => {
    return context.prisma.createFingerprint({
      type,
      side
    })
  }
}

module.exports = {
  Mutation
}
