import React from 'react';

interface SkillTagProps {
  skill: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded border border-gray-300 text-xs font-medium">
      {skill}
    </span>
  );
};

export default SkillTag;
