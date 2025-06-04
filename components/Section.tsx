import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={`py-5 md:py-6 ${className || ''}`}>
      <div className="container mx-auto"> {/* Removed specific px from here, handled in App.tsx main */}
        <h2 className="text-xl font-bold text-black mb-3 md:mb-4">
          {title}
        </h2>
        <div className="text-gray-700 leading-relaxed text-sm"> {/* Applied text-sm globally here */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
