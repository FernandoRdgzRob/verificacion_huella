const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET, checkValidUser, runLibrary, getURL } = require('../utils')

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
  logIn: async (parent, { input: { email, password } }, context) => {
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
  createVerification: async (parent, args, context) => {
    const { input: { firstFingerprint, secondFingerprint } } = args
    const userId = await checkValidUser(context)

    const firstFingerprintURL = getURL(firstFingerprint.filelink)
    const secondFingerprintURL = getURL(secondFingerprint.filelink)

    const upsertedFirstFingerprint = await context.prisma.createFingerprint({
      ...firstFingerprint,
      filelink: firstFingerprintURL
    })

    const upsertedSecondFingerprint = await context.prisma.createFingerprint({
      ...secondFingerprint,
      filelink: secondFingerprintURL
    })

    const result = await runLibrary(`wine library/FingerprintVerification.exe ${firstFingerprintURL} ${secondFingerprintURL}`)

    const verification = await context.prisma.createVerification({
      fingerprintA: {
        connect: {
          id: upsertedFirstFingerprint.id
        }
      },
      fingerprintB: {
        connect: {
          id: upsertedSecondFingerprint.id
        }
      },
      match: result === '1',
      createdBy: {
        connect: {
          id: userId
        }
      }
    })

    await context.prisma.updateFingerprint({
      data: {
        verificationID: verification.id
      },
      where: {
        id: upsertedFirstFingerprint.id
      }
    })

    await context.prisma.updateFingerprint({
      data: {
        verificationID: verification.id
      },
      where: {
        id: upsertedSecondFingerprint.id
      }
    })

    return verification
  }
}

module.exports = {
  Mutation
}
