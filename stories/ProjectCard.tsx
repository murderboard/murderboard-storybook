import React from 'react';

export interface ListItem {
  label: string;
  values: string[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  updatedAt: string;
  initials?: string;
  avatarImage?: string; // URL of avatar image
  borderTopColor?: string; // Tailwind color class (e.g., 'red-500', 'blue-500')
  listItems?: ListItem[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  updatedAt,
  initials = 'PR',
  avatarImage,
  borderTopColor = 'red-500',
  listItems = [],
}) => {
  const getBorderColorClass = (color: string) => {
    switch (color) {
      case 'red-500':
        return 'border-t-red-500 dark:border-t-red-500';
      case 'blue-500':
        return 'border-t-blue-500 dark:border-t-blue-500';
      case 'orange-500':
        return 'border-t-orange-500 dark:border-t-orange-500';
      default:
        return 'border-t-red-500 dark:border-t-red-500';
    }
  };

  return (
    <div className={`max-w-sm bg-white dark:bg-gray-800 border border-t-4 ${getBorderColorClass(borderTopColor)} dark:border-gray-700 rounded-2xl shadow-sm p-5`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-200 overflow-hidden">
            {avatarImage ? (
              <img src={avatarImage} alt={title} className="w-full h-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Updated {updatedAt}</p>
          </div>
        </div>
        <div className="hs-dropdown relative inline-flex">
          <button type="button" className="hs-dropdown-toggle p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            ...
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      {/* List */}
      <div className="space-y-3">
        {listItems.map((item, index) => (
          <dl key={index} className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">{item.label}:</span>
            </dt>
            <dd>
              <ul>
                {item.values.map((value, valueIndex) => (
                  <li 
                    key={valueIndex}
                    className={`me-1 ${valueIndex < item.values.length - 1 ? 'after:content-[","]' : ''} inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
      {/* End List */}

      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
      </div>
    </div>
  );
};
