import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

interface MurderBoardProps {
  victim: {
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  };
  suspects: Array<{
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  }>;
  clues: Array<{
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  }>;
  photos: Array<{
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  }>;
  crimeScenes: Array<{
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  }>;
}

export const MurderBoard: React.FC<MurderBoardProps> = ({
  victim,
  suspects,
  clues,
  photos,
  crimeScenes,
}) => {
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    updatedAt: string;
    initials?: string;
    avatarImage?: string;
    borderTopColor?: string;
    listItems?: Array<{
      label: string;
      values: string[];
    }>;
  } | null>(null);

  const handleCardClick = (card: typeof selectedCard) => {
    setSelectedCard(card);
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-6">
      {/* Victim Section - Horizontal Scroll */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">THE VICTIM</h2>
        <div className="overflow-x-auto pb-4">
          <div className="inline-block min-w-[440px]">
            <div className="mx-2">
              <ProjectCard {...victim} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Board - Horizontal Scroll Container */}
      <div className="overflow-x-auto">
        <div className="inline-flex gap-6 min-w-full">
          {/* Suspects Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 w-[440px] flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">SUSPECTS</h3>
            <div className="space-y-4">
              {suspects.map((suspect, index) => (
                <div key={index} onClick={() => handleCardClick(suspect)} className="cursor-pointer mx-2">
                  <div className="w-[400px]">
                    <ProjectCard {...suspect} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clues Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 w-[440px] flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">CLUES</h3>
            <div className="space-y-4">
              {clues.map((clue, index) => (
                <div key={index} onClick={() => handleCardClick(clue)} className="cursor-pointer mx-2">
                  <div className="w-[400px]">
                    <ProjectCard {...clue} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 w-[440px] flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">PHOTOS</h3>
            <div className="space-y-4">
              {photos.map((photo, index) => (
                <div key={index} onClick={() => handleCardClick(photo)} className="cursor-pointer mx-2">
                  <div className="w-[400px]">
                    <ProjectCard {...photo} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crime Scenes Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 w-[440px] flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">CRIME SCENES</h3>
            <div className="space-y-4">
              {crimeScenes.map((scene, index) => (
                <div key={index} onClick={() => handleCardClick(scene)} className="cursor-pointer mx-2">
                  <div className="w-[400px]">
                    <ProjectCard {...scene} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <ProjectModal
          {...selectedCard}
          isOpen={!!selectedCard}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}; 