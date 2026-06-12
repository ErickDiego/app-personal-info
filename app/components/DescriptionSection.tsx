'use client';

import { useCallback } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';
import { Personal } from '@/types/portfolio';

export function DescriptionSection() {
  const fetcher = useCallback(() => portfolioService.getPersonal(), []);
  const { data, loading, error } = usePortfolioData(fetcher);

  if (loading) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Acerca de Mí
          </h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500">Error cargando descripción</p>
        </div>
      </section>
    );
  }

  const personal = data as Personal;

  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Acerca de Mí
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {personal.description}
        </p>
      </div>
    </section>
  );
}
