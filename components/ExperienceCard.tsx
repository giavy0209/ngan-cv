
import React from 'react';
import { ExperienceProject } from '../types';

interface ExperienceCardProps {
  project: ExperienceProject;
  index: number;
}

const ProjectLetterBadge: React.FC<{ letter: string }> = ({ letter }) => (
  <div className="absolute -top-4 -left-4 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
    {letter}
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ project, index }) => {
  const projectLetter = String.fromCharCode(65 + index); // A, B, C...

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 mb-8 relative transition-all hover:shadow-2xl">
      <ProjectLetterBadge letter={projectLetter} />
      <div className="ml-8">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{project.projectName}</h3>
        <p className="text-md font-semibold text-sky-600 mb-4">{project.roleContext}</p>

        {project.introText && <p className="mb-4 text-gray-600 italic">{project.introText}</p>}

        {project.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Responsibilities:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
              {project.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
            </ul>
          </div>
        )}

        {project.collaboration && project.collaboration.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Collaboration:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
              {project.collaboration.map((collab, i) => <li key={i}>{collab}</li>)}
            </ul>
          </div>
        )}

        {project.outputsAndAchievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">Outputs and Achievements:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
              {project.outputsAndAchievements.map((out, i) => <li key={i}>{out}</li>)}
            </ul>
          </div>
        )}

        {project.technologiesAndTools.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Technologies & Tools:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesAndTools.map((tool, i) => (
                <span key={i} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
