
import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-sky-200 transition-colors cursor-default">
      {skill}
    </span>
  );
};

export default SkillTag;
