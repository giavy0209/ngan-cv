
import React from 'react';
import { EducationEntry } from '../types';
import { AcademicCapIcon } from '../constants';


const EducationItem: React.FC<EducationEntry> = ({ degree, major, institution, year }) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <AcademicCapIcon className="w-8 h-8 text-sky-500 mr-4 mt-1 shrink-0" />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{degree}</h3>
        {major && <p className="text-md text-sky-600">{major}</p>}
        <p className="text-gray-600">{institution}</p>
        <p className="text-sm text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default EducationItem;
