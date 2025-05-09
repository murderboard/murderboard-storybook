import React from 'react';

export interface ListItem {
  label: string;
  values: string[];
}

export interface ProjectModalProps {
  title: string;
  description: string;
  updatedAt: string;
  initials?: string;
  avatarImage?: string;
  borderTopColor?: string;
  listItems?: ListItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  description,
  updatedAt,
  initials = 'PR',
  avatarImage,
  borderTopColor = 'blue-500',
  listItems = [],
  isOpen,
  onClose,
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with enhanced transition */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
        onClick={onClose}
      />
      
      {/* Modal container with enhanced transition */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-screen">
          {/* Image/Initials Section */}
          <div className="w-full md:w-1/2 bg-gray-900 dark:bg-gray-800 relative">
            {avatarImage ? (
              <div className="absolute inset-0">
                <img
                  src={avatarImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${getBorderColorClass(borderTopColor)} border-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 shadow-2xl`}>
                  <span className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200">{initials}</span>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      {title}
                      <span className={`inline-block w-3 h-3 rounded-full ${borderTopColor === 'red-500' ? 'bg-red-500' : borderTopColor === 'blue-500' ? 'bg-blue-500' : 'bg-orange-500'}`}></span>
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {updatedAt}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none transition-colors duration-200"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>

                  {/* List */}
                  <div className="space-y-6">
                    {listItems.map((item, index) => (
                      <dl key={index} className="flex flex-col gap-2">
                        <dt className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-neutral-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {item.label}
                        </dt>
                        <dd>
                          <ul className="flex flex-wrap gap-2">
                            {item.values.map((value, valueIndex) => (
                              <li 
                                key={valueIndex}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                              >
                                {value}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </dl>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-lg border border-transparent px-4 py-2 bg-gray-800 dark:bg-gray-700 text-base font-medium text-white hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none transition-colors duration-200"
                  onClick={onClose}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 