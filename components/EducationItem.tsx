import React from 'react';
import { EducationEntry } from '../types';

const EducationItem: React.FC<EducationEntry> = ({ degree, major, institution, year }) => {
  return (
    <div className="text-sm mb-0.5"> {/* Reduced margin bottom */}
      <p className="text-gray-700 leading-snug">
        <span className="font-semibold text-black">• </span> 
        {degree}
        {major ? ` ${major}` : ''}
        {institution ? `, ${institution}` : ''}
        {year ? ` (${year})` : ''}. {/* Added period to match PDF */}
      </p>
    </div>
  );
};

export default EducationItem;
