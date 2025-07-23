import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // tu conexión local o de Atlas
const dbName = 'neural-crm'; // el nombre de tu base

let cachedClient: MongoClient | null = null;

export async function connectToDB() {
  if (cachedClient) {
    return cachedClient.db(dbName);
  }

  const client = await MongoClient.connect(uri);
  cachedClient = client;

  return client.db(dbName);
}
