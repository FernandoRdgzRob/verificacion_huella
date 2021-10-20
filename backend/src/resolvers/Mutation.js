const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')

const Mutation = {
  signUp: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword
    })

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    }
  },
  logIn: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }
    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    }
  },
  createVerification: async (parent, { firstFingerprint, secondFingerprint }, context) => {
    const fingerprintOne = await context.prisma.createFingerprint({
      ...firstFingerprint
    })

    const fingerprintTwo = await context.prisma.createFingerprint({
      ...secondFingerprint
    })

    console.log({ fingerprintOne, fingerprintTwo })
  }
}

module.exports = {
  Mutation
}
