import { connectToDB } from '../utils/mongo';

export default defineEventHandler(async (event) => {
  const db = await connectToDB();

  const collections = await db.listCollections().toArray();

  return {
    message: 'Conexión exitosa',
    collections: collections.map(c => c.name)
  };
});
