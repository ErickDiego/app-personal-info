import { portfolioData } from "@/app/data/portfolio";

export function DescriptionSection() {
  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Acerca de Mí
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {portfolioData.personal.description}
        </p>
      </div>
    </section>
  );
}
