export interface WorkplaceCardProps {
  name: string;
  position: string;
  description: string;
  logo: string;
  startDate: string;
  endDate: string;
}

export function WorkplaceCard({
  name,
  position,
  description,
  logo,
  startDate,
  endDate,
}: WorkplaceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} className="h-20 object-contain" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
          {position}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
}
