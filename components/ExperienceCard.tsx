import React from 'react';
import { ExperienceProject } from '../types';

interface ExperienceCardProps {
  project: ExperienceProject;
  index: number;
}

const ProjectLetterBadge: React.FC<{ letter: string }> = ({ letter }) => (
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-md font-bold flex-shrink-0 mr-3 mt-0.5">
    {letter}
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ project, index }) => {
  const projectLetter = String.fromCharCode(65 + index); // A, B, C...

  return (
    <div className="mb-5 text-sm"> {/* Removed card styling, adjusted margin */}
      <div className="flex items-start">
        <ProjectLetterBadge letter={projectLetter} />
        <div>
          <h3 className="text-md font-bold text-black -mt-0.5 leading-tight">{project.projectName}</h3> {/* Adjusted margin for alignment */}
          <p className="text-xs font-semibold text-gray-600 mb-2 leading-tight">{project.roleContext}</p>
        </div>
      </div>

      {project.introText && <p className="my-2 text-gray-600 italic pl-[calc(1.75rem+0.75rem)]">{project.introText}</p>}

      {(project.responsibilities.length > 0 || (project.collaboration && project.collaboration.length > 0) || project.outputsAndAchievements.length > 0) && (
         <div className="pl-[calc(1.75rem+0.75rem)]"> {/* Indent content to align with title text (badge width + margin) */}
            {project.responsibilities.length > 0 && (
            <div className="mb-2">
                <h4 className="font-bold text-black mb-0.5">Responsibilities: <span className="font-normal text-gray-700">Tasks and responsibilities include but are not limited to</span></h4>
                <ul className="list-disc list-outside pl-5 text-gray-700 space-y-0.5">
                {project.responsibilities.map((resp, i) => <li key={i} className="leading-snug">{resp}</li>)}
                </ul>
            </div>
            )}

            {project.collaboration && project.collaboration.length > 0 && (
            <div className="mb-2">
                <h4 className="font-bold text-black mb-0.5">Collaboration:</h4>
                <ul className="list-disc list-outside pl-5 text-gray-700 space-y-0.5">
                {project.collaboration.map((collab, i) => <li key={i} className="leading-snug">{collab}</li>)}
                </ul>
            </div>
            )}

            {project.outputsAndAchievements.length > 0 && (
            <div className="mb-2">
                <h4 className="font-bold text-black mb-0.5">Outputs and achievements:</h4>
                <ul className="list-disc list-outside pl-5 text-gray-700 space-y-0.5">
                {project.outputsAndAchievements.map((out, i) => <li key={i} className="leading-snug">{out}</li>)}
                </ul>
            </div>
            )}
         </div>
      )}
      

      {project.technologiesAndTools.length > 0 && (
        <div className="pl-[calc(1.75rem+0.75rem)] mt-2">
          <h4 className="font-bold text-black mb-0.5">Technologies & Tools:</h4>
          <p className="text-gray-600 leading-snug">
            {project.technologiesAndTools.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
