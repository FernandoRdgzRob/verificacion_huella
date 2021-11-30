const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET, checkValidUser, runLibrary } = require('../utils')

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

    const upsertedFirstFingerprint = await context.prisma.createFingerprint({
      ...firstFingerprint
    })

    const upsertedSecondFingerprint = await context.prisma.createFingerprint({
      ...secondFingerprint
    })

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
      match: true,
      coincidence: 62.5,
      createdBy: {
        connect: {
          id: userId
        }
      }
    })

    // exec('wine library/FingerprintVerification.exe https://firebasestorage.googleapis.com/v0/b/fingerprint-verification-70d6f.appspot.com/o/images%2Frexgdn60y_fingerprint.jpg?alt=media https://firebasestorage.googleapis.com/v0/b/fingerprint-verification-70d6f.appspot.com/o/images%2Fuh2m5t0sx_fingerprint.jpg?alt=media', (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`exec error: ${error}`)
    //     // return
    //   }
    //   console.log(`stdout: ${stdout}`)
    //   console.error(`stderr: ${stderr}`)
    // })

    const result = await runLibrary('wine library/FingerprintVerification.exe https://firebasestorage.googleapis.com/v0/b/fingerprint-verification-70d6f.appspot.com/o/images%2Frexgdn60y_fingerprint.jpg?alt=media https://firebasestorage.googleapis.com/v0/b/fingerprint-verification-70d6f.appspot.com/o/images%2Fuh2m5t0sx_fingerprint.jpg?alt=media')

    console.log({ result })
    return verification
  }
}

module.exports = {
  Mutation
}
