const { verify } = require('jsonwebtoken')
const { exec } = require('child_process')
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

function runLibrary (command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
        return
      }

      resolve(stdout.trim())
    })
  })
}

function getURL (url) {
  const processedURL = url.indexOf('&') !== -1
    ? url.substring(0, url.indexOf('&'))
    : url

  return processedURL
}

module.exports = {
  checkValidUser,
  getUserId,
  runLibrary,
  getURL,
  APP_SECRET
}
