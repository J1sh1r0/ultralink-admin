import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const client = await MongoClient.connect(process.env.MONGO_URL)
  const db = client.db('neural-crm')
  const users = db.collection('users')

  const user = await users.findOne({ userName: body.userName })
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Usuario no encontrado' })
  }

  const passwordMatch = await bcrypt.compare(body.password, user.userPassword)
  if (!passwordMatch) {
    throw createError({ statusCode: 401, statusMessage: 'Contraseña incorrecta' })
  }

  return {
    message: 'Login exitoso',
    user: {
      userName: user.userName,
      role: user.role
    }
  }
})
