import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI)
const dbName = 'tuBaseDatos'

export default defineEventHandler(async () => {
  await client.connect()
  const db = client.db(dbName)
  const servicios = await db.collection('servicios').find().toArray()
  return servicios
})
