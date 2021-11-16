const { verify } = require('jsonwebtoken')
const APP_SECRET = 'appsecret321'

function getUserId (req) {
  const auth = req.headers.authorization || ''
  if (auth) {
    const token = auth.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    if (verifiedToken && verifiedToken.userId) {
      return verifiedToken.userId
    }
  }

  return null
}

async function checkValidUser (context) {
  if (!context.userId) {
    throw new Error('Authentication error')
  }

  const user = await context.prisma.user({ id: context.userId })
  if (user) {
    return context.userId
  } else {
    throw new Error('Authentication error')
  }
}

module.exports = {
  checkValidUser,
  getUserId,
  APP_SECRET
}
