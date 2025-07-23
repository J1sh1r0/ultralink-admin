import { MongoClient } from "mongodb";

export default defineEventHandler(async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('neural-crm');
  const users = await db.collection('users').find().toArray();
  return users;
});
