const Payloads = {
  VerificationPayload: {
    fingerprintA: async (parent, args, context) => {
      const verificationID = parent.id
      const fingerprints = await context.prisma.fingerprints({
        where: {
          verificationID
        }
      })
      return fingerprints[0]
    },
    fingerprintB: async (parent, args, context) => {
      const verificationID = parent.id
      const fingerprints = await context.prisma.fingerprints({
        where: {
          verificationID
        }
      })
      return fingerprints[1]
    }
  }
}

module.exports = {
  Payloads
}
