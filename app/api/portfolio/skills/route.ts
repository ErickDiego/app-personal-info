import { getDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('portfolio');
    const doc = await collection.findOne({ type: 'skills' });

    if (!doc) {
      return NextResponse.json(
        { error: 'Skills data not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: doc.data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
