'use client';

import { useCallback } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';
import { Workplace } from '@/types/portfolio';
import { WorkplaceCard } from "./WorkplaceCard";

export function WorkplacesSection() {
  const fetcher = useCallback(() => portfolioService.getWorkplaces(), []);
  const { data, loading, error } = usePortfolioData(fetcher);

  if (loading) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Experiencia Profesional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500">Error cargando experiencia profesional</p>
        </div>
      </section>
    );
  }

  const workplaces = data as Workplace[];

  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Experiencia Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {workplaces.map((workplace) => (
            <WorkplaceCard
              key={workplace.id}
              name={workplace.name}
              position={workplace.position}
              description={workplace.description}
              logo={workplace.logo}
              startDate={workplace.startDate}
              endDate={workplace.endDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
