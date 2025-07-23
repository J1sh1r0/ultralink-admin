// server/utils/mongo.ts
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
if (!uri) throw new Error('Falta la variable de entorno MONGODB_URI')

const client = new MongoClient(uri)
const dbName = 'tu_basedatos' // ← reemplaza con el nombre real de tu base

export async function connectToDatabase() {
  if (!client.isConnected?.()) {
    await client.connect()
  }
  return client.db(dbName)
}
