import { portfolioData } from "@/app/data/portfolio";

export function CertificationsSection() {
  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Certificaciones
        </h2>
        <div className="space-y-6">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expedido por: {cert.issuer}
                  </p>
                </div>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
