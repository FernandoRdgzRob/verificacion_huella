const { prisma } = require('../src/generated/prisma-client')

async function main () {
  await prisma.createUser({
    email: 'alice@mail.com',
    name: 'Alice',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
    isAdmin: true
  })
}

main()
