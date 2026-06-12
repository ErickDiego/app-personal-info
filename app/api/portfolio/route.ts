import { getDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('portfolio');

    const [personal, workplaces, skills, certifications, contacts] = await Promise.all([
      collection.findOne({ type: 'personal' }),
      collection.findOne({ type: 'workplaces' }),
      collection.findOne({ type: 'skills' }),
      collection.findOne({ type: 'certifications' }),
      collection.findOne({ type: 'contacts' }),
    ]);

    return NextResponse.json({
      data: {
        personal: personal?.data,
        workplaces: workplaces?.data,
        skills: skills?.data,
        certifications: certifications?.data,
        contacts: contacts?.data,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
