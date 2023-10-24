import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { id, name } = await readBody(event)
  const user = await prisma.user.create({
    data: {
      id: null,
      name: name,
    },
  })
  return user
})
