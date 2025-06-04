
import React from 'react';
import { TimelineEvent } from '../types';
import { BriefcaseIcon } from '../constants';

interface TimelineComponentProps {
  timeline: TimelineEvent[];
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ timeline }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-sky-300 transform -translate-x-1/2"></div>
      
      {timeline.map((event, index) => (
        <div key={index} className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          {/* Desktop: Connector & Dot */}
          <div className="hidden md:flex w-1/2">
            <div className={`h-0.5 w-full ${index % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-sky-300 to-transparent`}></div>
          </div>
          <div className="hidden md:block relative">
            <div className={`w-4 h-4 rounded-full ${event.current ? 'bg-sky-500 ring-4 ring-sky-200' : 'bg-sky-300'} shadow-md z-10`}></div>
          </div>
           <div className="hidden md:flex w-1/2">
            <div className={`h-0.5 w-full ${index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-sky-300 to-transparent`}></div>
          </div>

          {/* Content Card */}
          <div className={`w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 ${index % 2 === 0 ? 'md:pr-8 md:mr-2' : 'md:pl-8 md:ml-2'} `}>
            {/* Mobile: Dot before card */}
            <div className="md:hidden flex items-center mb-2">
                <div className={`w-3 h-3 rounded-full ${event.current ? 'bg-sky-500 ring-2 ring-sky-200' : 'bg-sky-300'} mr-3 shrink-0`}></div>
                <p className="text-sm font-semibold text-sky-600">{event.dateRange}</p>
            </div>
             <p className="hidden md:block text-sm font-semibold text-sky-600 mb-1">{event.dateRange}</p>
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
            <p className="text-gray-600">{event.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
