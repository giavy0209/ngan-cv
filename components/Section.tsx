
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className }) => {
  return (
    <section className={`py-8 md:py-12 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center mb-6 md:mb-8">
          {icon && <span className="mr-3 text-sky-500">{icon}</span>}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 border-b-2 border-sky-500 pb-2 inline-block">
            {title}
          </h2>
        </div>
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
