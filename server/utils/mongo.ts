// server/utils/mongo.ts
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
if (!uri) throw new Error('Falta la variable de entorno MONGODB_URI')

const client = new MongoClient(uri)
const dbName = 'tu_basedatos' 

let db = null

export async function connectToDatabase() {
  if (!db) {
    await client.connect()
    db = client.db(dbName)
  }
  return db
}
