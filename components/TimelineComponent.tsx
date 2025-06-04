import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineComponentProps {
  timeline: TimelineEvent[];
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex items-start pt-3 relative min-w-max"> {/* min-w-max to allow horizontal scroll if needed */}
        {/* The main connecting line - positioned to be behind the dots */}
        {timeline.length > 1 && (
          <div 
            className="absolute top-[9px] h-[2px] bg-gray-300 z-0"
            style={{ 
              // Dynamically calculate width for the line to span between first and last dot centers
              left: `calc( (100% / ${timeline.length}) / 2 )`, 
              right: `calc( (100% / ${timeline.length}) / 2 )`
            }}
          ></div>
        )}

        {timeline.map((event, index) => (
          <div 
            key={index} 
            className="flex-1 flex flex-col items-center text-center px-2 relative"
            style={{ minWidth: '120px' }} // Ensures minimum width for each item for better spacing
          >
            <div className={`w-3.5 h-3.5 rounded-full ${event.current ? 'bg-black ring-2 ring-offset-1 ring-black' : 'bg-black'} z-10 mb-1.5`}></div>
            <p className="text-xs font-semibold text-black whitespace-nowrap leading-tight">{event.dateRange}</p>
            <p className="text-sm font-bold text-black mt-0.5 leading-tight">{event.title}</p>
            <p className="text-xs text-gray-600 leading-tight">{event.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
