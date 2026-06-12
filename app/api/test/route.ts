import { getDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      message: 'Connected to MongoDB!',
      collections: collections.map(c => c.name),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
