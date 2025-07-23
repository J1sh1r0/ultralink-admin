// server/api/login.ts
import { connectToDatabase } from '~/server/utils/mongo'
import bcrypt from 'bcryptjs'
import { H3Event, readBody } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  // Solo aceptar POST
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'HTTP method is not allowed.',
    })
  }

  const body = await readBody(event)
  const { userName, password } = body

  if (!userName || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios.',
    })
  }

  const db = await connectToDatabase()
  const user = await db.collection('users').findOne({ userName })

  if (!user || !bcrypt.compareSync(password, user.userPassword)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciales inválidas.',
    })
  }

  return { message: 'Login exitoso', userId: user._id }
})
