import { getDatabase } from './mongodb';
import { portfolioData } from '@/app/data/portfolio';

export async function seedPortfolioData() {
  try {
    const db = await getDatabase();
    const collection = db.collection('portfolio');

    // Create indexes
    await collection.createIndex({ type: 1 }, { unique: true });

    // Upsert personal data
    await collection.updateOne(
      { type: 'personal' },
      { 
        $set: {
          type: 'personal',
          data: portfolioData.personal,
          updatedAt: new Date(),
        }
      },
      { upsert: true }
    );

    // Upsert workplaces
    await collection.updateOne(
      { type: 'workplaces' },
      { 
        $set: {
          type: 'workplaces',
          data: portfolioData.workplaces,
          updatedAt: new Date(),
        }
      },
      { upsert: true }
    );

    // Upsert skills
    await collection.updateOne(
      { type: 'skills' },
      { 
        $set: {
          type: 'skills',
          data: portfolioData.skills,
          updatedAt: new Date(),
        }
      },
      { upsert: true }
    );

    // Upsert certifications
    await collection.updateOne(
      { type: 'certifications' },
      { 
        $set: {
          type: 'certifications',
          data: portfolioData.certifications,
          updatedAt: new Date(),
        }
      },
      { upsert: true }
    );

    // Upsert contacts
    await collection.updateOne(
      { type: 'contacts' },
      { 
        $set: {
          type: 'contacts',
          data: portfolioData.contacts,
          updatedAt: new Date(),
        }
      },
      { upsert: true }
    );

    console.log('✅ Portfolio data synced to MongoDB successfully');
    return {
      success: true,
      message: 'Portfolio data synced to MongoDB'
    };
  } catch (error) {
    console.error('❌ Error seeding portfolio data:', error);
    throw error;
  }
}
