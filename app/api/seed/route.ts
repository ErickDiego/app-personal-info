import { seedPortfolioData } from '@/lib/seed';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await seedPortfolioData();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
