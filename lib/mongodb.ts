import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';

if (!uri) {
  throw new Error('Please define MONGODB_URI environment variable');
}

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;

  return client;
}

export async function getDatabase() {
  const client = await connectToDatabase();
  return client.db('personal-info'); // Cambia 'personal-info' por tu nombre de BD
}
