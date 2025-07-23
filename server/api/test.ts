import { connectToDatabase } from '../utils/mongo'

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase()

  const collections = await db.listCollections().toArray()

  return {
    message: 'Conexión exitosa',
    collections: collections.map(c => c.name),
  }
})
