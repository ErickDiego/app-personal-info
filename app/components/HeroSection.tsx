'use client';

import { useCallback } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';
import { Personal } from '@/types/portfolio';

export function HeroSection() {
  const fetcher = useCallback(() => portfolioService.getPersonal(), []);
  const { data, loading, error } = usePortfolioData(fetcher);

  if (loading) {
    return (
      <section className="w-full bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black text-white py-20 px-4 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-12 bg-blue-500 rounded animate-pulse mb-6"></div>
          <div className="h-8 bg-blue-500 rounded animate-pulse mb-8 w-64 mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="w-full bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black text-white py-20 px-4 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-200">Error cargando información</p>
        </div>
      </section>
    );
  }

  const personal = data as Personal;

  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-black text-white py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {personal.name}
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 dark:text-blue-200 mb-8">
          {personal.title}
        </p>
        <p className="text-lg text-blue-50 dark:text-blue-300 max-w-2xl mx-auto">
          {personal.heroTitle}
        </p>
      </div>
    </section>
  );
}
