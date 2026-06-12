'use client';

import { useCallback } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';
import { Skill } from '@/types/portfolio';

export function SkillsSection() {
  const fetcher = useCallback(() => portfolioService.getSkills(), []);
  const { data, loading, error } = usePortfolioData(fetcher);

  if (loading) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Herramientas y Tecnologías
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
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
          <p className="text-red-500">Error cargando habilidades</p>
        </div>
      </section>
    );
  }

  const skills = data as Skill[];

  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Herramientas y Tecnologías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <span className="text-center font-semibold text-gray-900 dark:text-white text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
