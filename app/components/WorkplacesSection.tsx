import { portfolioData } from "@/app/data/portfolio";
import { WorkplaceCard } from "./WorkplaceCard";

export function WorkplacesSection() {
  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Experiencia Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.workplaces.map((workplace) => (
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
